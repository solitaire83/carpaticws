const IPS = "http://carpatic.co";

export const rules = [
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
