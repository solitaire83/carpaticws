const SAFE = "https://carpatic.co";
const TITLE = "Carpatic Unlocked";
const MSG = "✰ Carpatic Unlocker V1M2 ✰"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ SAFE, TITLE, MSG });

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{
      id: 1,
      priority: 1,
      action: {
        type: "modifyHeaders",
        responseHeaders: [
          { header: "X-Frame-Options", operation: "remove" },
          { header: "Content-Security-Policy", operation: "remove" }
        ]
      },
      condition: {
        urlFilter: new URL(SAFE).hostname,
        resourceTypes: ["sub_frame", "main_frame"]
      }
    }]
  });
});
