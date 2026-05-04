const IPS = "http://carpatic.co"; 

const rules = [
  {
    id: 1,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { url: IPS }
    },
    condition: {
      urlFilter: "carpatic.win",
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: 2,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { url: IPS }
    },
    condition: {
      urlFilter: "www.carpatic.win",
      resourceTypes: ["main_frame"]
    }
  },
    {
    id: 3,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { url: IPS }
    },
    condition: {
      urlFilter: "carpaticgiveaways.com",
      resourceTypes: ["main_frame"]
    }
  },
  {
    id: 4,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { url: IPS }
    },
    condition: {
      urlFilter: "www.carpaticgiveaways.com",
      resourceTypes: ["main_frame"]
    }
  }
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3, 4],
    addRules: rules
  });
  console.log("Webshield activated");
});