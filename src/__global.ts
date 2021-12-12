import type { NODE_ENV_TYPES } from '_/__constants';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: typeof NODE_ENV_TYPES[number];
      VARS_TO_CHECK?: string; // env var names
      LOG_LEVEL?: string; // TODO replace this once logging is implemented
      HOSTNAME?: string; // k8s, docker supplied
    }
  }
}
export {};
