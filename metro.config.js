const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    jscConfig: {
      parser: {
        syntax: 'ecmascript',
        jsx: true,
      },
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
        hermesParser: true,
        keepClassNames: true,
        keepFnNames: true,
        enableTDZ: true,
      },
    },
  };
})();
