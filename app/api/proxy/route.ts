import { DEFAULT_ALLOWED_URL_PATTERNS } from "@fal-ai/server-proxy";
import { createRouteHandler } from "@fal-ai/server-proxy/nextjs";

export const { GET, POST, PUT } = createRouteHandler({
  // Only the apps this playground calls can run through the proxy.
  allowedEndpoints: [
    "fal-ai/stable-cascade/**",
    "fal-ai/fast-svd/**",
    "fal-ai/fast-sdxl/**",
    "110602490/lcm-sd15-i2i/**",
    "110602490/sdxl-turbo-realtime/**",
    "fal-ai/fooocus/**",
    "fal-ai/animatediff/**",
    "fal-ai/animatediff-lcm/**",
    "fal-ai/ip-adapter-face-id/**",
    "fal-ai/imageutils/**",
    "fal-ai/illusion-diffusion/**",
  ],
  // Realtime connections need a short-lived token minted through the proxy.
  allowedUrlPatterns: [...DEFAULT_ALLOWED_URL_PATTERNS, "rest.fal.ai/tokens/"],
  // Anyone who can reach this route can spend your fal credits on the apps
  // above. Before deploying, set this to false and add `isAuthenticated` with
  // your app's session check.
  allowUnauthorizedRequests: true,
});
