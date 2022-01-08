module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/build/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  setupFiles: ["<rootDir>/src/tests/setupTests.ts"],
  testEnvironment: "jsdom",
};
