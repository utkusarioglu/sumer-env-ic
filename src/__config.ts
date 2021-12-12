require("dotenv").config();
import { strict as assert } from "assert";
import { NODE_ENV_TYPES } from "_/__constants";
import { LOG_LEVEL_KEYS } from "_services/logging/logging.constants";
import type { NodeEnvTypes } from "_types/node.types";

assert(
  !!process.env.NODE_ENV &&
    NODE_ENV_TYPES.includes(process.env.NODE_ENV as NodeEnvTypes),
  [
    ".env.NODE_ENV can only be one of the following values:",
    ...NODE_ENV_TYPES,
  ].join("\n")
);

assert(
  !!process.env.VARS_TO_CHECK,
  ".env.VARS_TO_TRACK needs to contain csv of environment variable names to track"
);

assert(
  !!process.env.LOG_LEVEL && LOG_LEVEL_KEYS.includes(process.env.LOG_LEVEL),
  [
    ".env.LOG_LEVEL can only be one of the following values:",
    ...LOG_LEVEL_KEYS,
  ].join("\n")
);

assert(
  !!process.env.HOSTNAME,
  ".env.HOSTNAME is required. This value usually comes from k8s or docker"
);

assert(
  !process.env.RESTART_TIMEOUT || !Number.isNaN(process.env.RESTART_TIMEOUT),
  ".env.RESTART_TIMEOUT optional variable has to be a numeric value"
);

export const NODE_ENV = process.env.NODE_ENV;
export const VARS_TO_CHECK = process.env.VARS_TO_CHECK.split(",");
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const HOSTNAME = process.env.HOSTNAME;
export const RESTART_TIMEOUT = !!process.env.RESTART_TIMEOUT
  ? +process.env.RESTART_TIMEOUT
  : 5000;
