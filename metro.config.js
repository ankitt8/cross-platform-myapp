const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts = [
    'native.js',
    'native.ts',
    'native.tsx',
    'js',
    'ts',
    'tsx',
    'json'
];

module.exports = mergeConfig(defaultConfig, {});
