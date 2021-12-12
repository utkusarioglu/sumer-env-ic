require('dotenv').config();
import { strict as assert } from 'assert';
import { nodeEnvTypes } from '_/__constants';

assert(
  !!process.env.NODE_ENV && nodeEnvTypes.includes(process.env.NODE_ENV),
  [
    '.env.NODE_ENV can only be one of the following values:',
    ...nodeEnvTypes,
  ].join('\n')
);

assert(
  !!process.env.VARS_TO_CHECK,
  '.env.VARS_TO_TRACK needs to contain csv of environment variable names to track'
);

assert(
  !!process.env.LOG_LEVEL,
  ['.env.LOG_LEVEL can only be one of the following values:'].join('\n')
);

export const NODE_ENV = process.env.NODE_ENV;
export const VARS_TO_CHECK = process.env.VARS_TO_CHECK.split(',');
export const LOG_LEVEL = process.env.LOG_LEVEL;