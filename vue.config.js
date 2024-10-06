const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://gabal-ecommerce-api.vercel.app", // API server URL
        changeOrigin: true, // Changes the origin of the host header to the target URL
        pathRewrite: { "^/api": "/api" }, // Rewrites the URL path
      },
    },
  },
});
