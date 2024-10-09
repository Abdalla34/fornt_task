// api/proxy.js
import { createProxyMiddleware } from "http-proxy-middleware";

export default (req, res) => {
  const proxy = createProxyMiddleware({
    target: "https://gabal-ecommerce-api.vercel.app", // Your API server URL
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/api", // Remove /api prefix from the request
    },
  });

  return proxy(req, res);
};
