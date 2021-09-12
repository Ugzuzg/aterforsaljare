import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts', '!**/generated/**', '!**/node_modules/**', '!**/*.spec.*'],
  projects: [
    {
      displayName: 'unit',
      testEnvironment: 'node',
      testRegex: '.*\\.spec\\.ts$',
      transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
      },
    },
    {
      displayName: 'e2e',
      testEnvironment: 'node',
      testRegex: '.*\\.e2e-spec\\.ts$',
      transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
      },
    },
  ],
});
