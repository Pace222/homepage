import protectedPiholeProxyHandler from "./proxy";

const widget = {
  api: "{url}/api/{endpoint}",
  apiv5: "{url}/admin/api.php?{endpoint}&auth={key}",
  proxyHandler: protectedPiholeProxyHandler,
};

export default widget;
