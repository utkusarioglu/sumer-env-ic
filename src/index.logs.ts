import loggerService from "_services/logging/logging.service";
import { RESTART_TIMEOUT, VARS_TO_CHECK } from "_/__config";

export function logIsIncluded(isIncluded: boolean, varToCheck: string) {
  !isIncluded && loggerService.debug(`"${varToCheck}" is not included in .env`);
}

export function logIsNotEmpty(isNotEmpty: boolean, varToCheck: string) {
  !isNotEmpty &&
    loggerService.debug(`"${varToCheck}" doesn't have a valid value`);
}

export function logFail() {
  loggerService.debug(`Check failed, Will restart in ${RESTART_TIMEOUT}`);
}

export function logRestarting() {
  loggerService.debug("Restarting");
}

export function logSuccess() {
  loggerService.debug("Completed successfully");
}

export function logStarting() {
  loggerService.debug(`Starting checking for env vars: ${VARS_TO_CHECK.join(", ")}`);
}
