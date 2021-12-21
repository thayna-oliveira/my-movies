const ignorePaths = [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '<rootDir>/docker/',
    '<rootDir>/logs/',
    '<rootDir>/test/',
    '<rootDir>/src/setup-jest.ts',
    '<rootDir>/src/jest.config.js',
    '<rootDir>/src/jestGlobalMocks.ts',
    '<rootDir>/src/main.ts',
    '<rootDir>/src/polyfills.ts',
];

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['src'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    moduleNameMapper: {
        '@env/(.*)': '<rootDir>/src/environments/$1',
        '@core/(.*)': '<rootDir>/src/app/core/$1',
        '@services/(.*)': '<rootDir>/src/app/core/services/$1',
        "@mocks": ["<rootDir>/stub/mocks/index.ts"],
        '@models/(.*)': '<rootDir>/src/app/shared/models/$1',
        '@components/(.*)': '<rootDir>/src/app/shared/components/$1',
        '@shared/(.*)': '<rootDir>/src/app/shared/$1',
        '@app/(.*)': '<rootDir>/src/app/$1',
    },
    collectCoverage: true,
    coverageReporters: [
        'text',
        'lcov',
        'cobertura',
        'html'
    ],
    testPathIgnorePatterns: ignorePaths,
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
    coveragePathIgnorePatterns: ignorePaths,
    modulePathIgnorePatterns: ignorePaths, 
    resetModules: false,
};