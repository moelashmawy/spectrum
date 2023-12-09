import { jsWithTsESM } from "ts-jest/presets";

export default {
  ...jsWithTsESM,
  moduleNameMapper: {
    "^.+\\.(jpg|ico|jpeg|png|gif)$": "<rootDir>/test/mocks/fileMock.ts",
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{ts,tsx}",
  ],
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        useESM: true,
      },
    ],
  },
};
