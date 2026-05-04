export function getDomains() {
  return chrome.runtime.getManifest().host_permissions
    .map(p => p.replace(/^\*:\/\//, "").replace(/\/\*$/, ""));
}
