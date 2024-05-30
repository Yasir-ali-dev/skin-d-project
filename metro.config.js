const metro = require("metro-config");
module.exports = (async () => {
  const defaultConfig = await metro.getDefaultConfig();
  const { assetExts } = defaultConfig.resolver;
  return {
    resolver: {
      // Add bin to assetExts
      assetExts: [...assetExts, "bin"],
    },
  };
})();
