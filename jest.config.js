module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: {
    '^@mod/(.*)$': ['<rootDir>/src/$1'],
  },
};
