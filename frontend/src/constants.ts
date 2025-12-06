export enum Mode {
  DEV = "development",
  PROD = "production",
}

const envMode = process.env.NODE_ENV === 'development' ? Mode.DEV : Mode.PROD;
export const mode = envMode;

export const APP_ID = process.env.NEXT_PUBLIC_APP_ID ?? '';
export const API_PATH = process.env.NEXT_PUBLIC_API_PATH ?? '';
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
export const API_HOST = process.env.NEXT_PUBLIC_API_HOST ?? '';
export const API_PREFIX_PATH = process.env.NEXT_PUBLIC_API_PREFIX_PATH ?? '';
export const WS_API_URL = process.env.NEXT_PUBLIC_WS_API_URL ?? '';
export const APP_BASE_PATH = process.env.NEXT_PUBLIC_APP_BASE_PATH ?? '';
export const APP_TITLE = process.env.NEXT_PUBLIC_APP_TITLE ?? 'Play Greenly';
export const APP_FAVICON_LIGHT = process.env.NEXT_PUBLIC_APP_FAVICON_LIGHT ?? '';
export const APP_FAVICON_DARK = process.env.NEXT_PUBLIC_APP_FAVICON_DARK ?? '';
export const APP_DEPLOY_USERNAME = process.env.NEXT_PUBLIC_APP_DEPLOY_USERNAME ?? '';
export const APP_DEPLOY_APPNAME = process.env.NEXT_PUBLIC_APP_DEPLOY_APPNAME ?? '';
export const APP_DEPLOY_CUSTOM_DOMAIN = process.env.NEXT_PUBLIC_APP_DEPLOY_CUSTOM_DOMAIN ?? '';
