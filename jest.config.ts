import nextJest from "next/jest";
// Sync object
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["cypress"],
  moduleNameMapper: {
    "@components/(.*)": ["<rootDir>/src/common/components/$1"],
    "@hooks/(.*)": ["<rootDir>/src/common/hooks/$1"],
    "@features/(.*)": ["<rootDir>/src/common/features/$1"],
    "@pages/(.*)": ["<rootDir>/src/pages/$1"],
    "@context/(.*)": ["<rootDir>/src/common/context/$1"],
    "@utils/(.*)": ["<rootDir>/src/common/utils/$1"],
  },
};

module.exports = createJestConfig(customJestConfig);
