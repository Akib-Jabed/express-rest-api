export default {
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js'],
    testMatch: ['**/*.test.js'],
    testPathIgnorePatterns: ['/node_modules/', 'dist', 'src/config', 'src/app.js', '/server.js'],
    coveragePathIgnorePatterns: ['/node_modules/', 'dist', 'src/config', 'src/app.js', '/server.js'],
    coverageReporters: ['text', 'lcov', 'html'],
    restoreMocks: true,
    resetMocks: true,
    resetModules: true,
    testEnvironmentOptions: {
        NODE_ENV: 'test',
    },
    collectCoverage: true,
    coverageDirectory: 'coverage',
    verbose: true,
}