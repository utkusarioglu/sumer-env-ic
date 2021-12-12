import { createLogger, transports, format } from 'winston';
import { LOG_LEVELS } from './logging.constants';
import { HOSTNAME, LOG_LEVEL, NODE_ENV } from '_/__config';

const { timestamp, combine, colorize, printf, errors, json } = format;

const logFormat = printf(
  ({ level, message, timestamp, stack }) =>
    `[${level}] ${timestamp} ${stack || message}`
);

function developmentLogger() {
  return createLogger({
    levels: LOG_LEVELS,
    level: LOG_LEVEL,
    format: combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()],
  });
}

function productionLogger() {
  return createLogger({
    levels: LOG_LEVELS,
    level: LOG_LEVEL,
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: {
      service: 'env-ic',
      hostname: HOSTNAME,
    },
    transports: [new transports.Console()],
  });
}

const loggerService =
  NODE_ENV === 'development' ? developmentLogger() : productionLogger();

export default loggerService;
