// Learn more https://docs.expo.io/guides/customizing-metro
// import { getDefaultConfig } from '@expo/metro-config';

const{ getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

export default getDefaultConfig(__dirname);
