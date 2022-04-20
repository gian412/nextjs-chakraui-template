module.exports = {
    moduleNameMapper: {
        /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

        /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '/src/(.*)': '<rootDir>/src/$1',
    },

    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
        /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
        '^.+\\.(js|jsx|ts|tsx)$': [
            'babel-jest',
            {
                presets: [
                    [
                        'next/babel',
                        { '@babel/preset-env': {}, '@babel/preset-typescript': {}, '@babel/preset-react': {} },
                    ],
                ],
            },
        ],
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    preset: 'ts-jest',
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        '!**/notes/**',
        '!**/.next/**',
        '!**/.storybook/**',
        '!**/src/stories/**',
        '!**/coverage/**',
        '!**/*.d.ts',
        '!**/*.stories.*',
        '!**/*.mocks.*',
        '!**/src/Theme.ts',
        '!commitlint.config.js',
        '!jest.config.js',
        '!next.config.js',
    ],
    coverageReporters: ['lcov'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
};
