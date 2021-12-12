import { VARS_TO_CHECK, RESTART_TIMEOUT } from '_/__config';
import {
  logIsIncluded,
  logIsNotEmpty,
  logFail,
  logRestarting,
  logSuccess,
  logStarting,
} from './index.logs';

logStarting();

const states = VARS_TO_CHECK.every((varToCheck) => {
  const isIncluded = Object.keys(process.env).includes(varToCheck);
  const isNotEmpty = !!process.env[varToCheck];
  logIsIncluded(isIncluded, varToCheck);
  logIsNotEmpty(isNotEmpty, varToCheck);
  return isIncluded && isNotEmpty;
});

if (!states) {
  logFail();
  setTimeout(() => {
    logRestarting();
    process.exit(1);
  }, RESTART_TIMEOUT);
} else {
  logSuccess();
}
