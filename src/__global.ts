import type { nodeEnvTypes } from '_/__constants';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: typeof nodeEnvTypes[number];
      VARS_TO_CHECK?: string; // env var names
      LOG_LEVEL?: string; // TODO replace this once logging is implemented
    }
  }
}
export {};
