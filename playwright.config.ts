import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run build && npm run start",
    port: 5000,
  },
  testDir: "e2e",
};

export default config;
