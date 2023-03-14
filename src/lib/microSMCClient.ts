import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: "xr6ihy5dqk",
  apiKey: process.env.MICROCMS_APP_KEY || "",
});
