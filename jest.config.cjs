module.exports = {
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
  };
  