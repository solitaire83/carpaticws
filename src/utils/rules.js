import { SAFE, DOMAINS } from "../config.js";

export const rules = DOMAINS.map((domain, i) => ({
  id: i + 1,
  priority: 1,
  action: {
    type: "redirect",
    redirect: { url: SAFE }
  },
  condition: {
    urlFilter: domain,
    resourceTypes: ["main_frame"]
  }
}));
