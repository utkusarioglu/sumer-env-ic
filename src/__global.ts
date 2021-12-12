import type { NodeEnvTypes } from "_types/node.types";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: NodeEnvTypes;
      VARS_TO_CHECK?: string; // env var names
      LOG_LEVEL?: string; // TODO replace this once logging is implemented
      HOSTNAME?: string; // k8s, docker supplied
      RESTART_TIMEOUT?: string; //number
    }
  }
}
export {};
