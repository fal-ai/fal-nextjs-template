import { createRouteHandler } from "@fal-ai/server-proxy/nextjs";

// By default the proxy forwards any fal model request on your FAL_KEY. Before
// deploying, restrict it so only your users and your apps can use it — see
// https://fal.ai/docs/documentation/model-apis/inference/proxy-setup#proxy-configuration
//
//   export const { GET, POST, PUT } = createRouteHandler({
//     allowedEndpoints: ["fal-ai/fast-sdxl"],
//     allowUnauthorizedRequests: false,
//   });
export const { GET, POST, PUT } = createRouteHandler();
