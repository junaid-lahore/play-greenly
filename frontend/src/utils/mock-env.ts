// ui/src/utils/mock-env.ts
const mockEnv = {
  MODE: 'production',
  BASE_URL: '/',
  PROD: true,
  DEV: false,
};

(globalThis as any).import = { meta: { env: mockEnv } };
