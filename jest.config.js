const { defaults } = require('jest-config');
module.exports = {
    setupFilesAfterEnv: ['./src/setUpTest.js'],
    moduleNameMapper: {
        '^antd/es/(.*)$': 'antd/lib/$1',
    },
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    testTimeout: 20000
}