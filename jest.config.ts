export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '\\.(css|less|sass|scss)$': '<rootDir>/test/__mock__/styleMock.ts',
    },
    // setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
    // testEnvironment: 'jsdom',
    // testMatch: ['<rootDir>/test/**/*.test.[jt]s?(x)'],
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
    transformIgnorePatterns: [],
}
