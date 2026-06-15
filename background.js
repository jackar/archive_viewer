// Archive Viewer — jump to the most recent archive.today snapshot of the current page.
//
// archive.today exposes a "newest" endpoint that 302-redirects to the latest
// snapshot of a given URL (or offers to create one if none exists):
//   https://archive.ph/newest/https://example.com/article
// That single URL is all we need — no API key, no scraping.

const DEFAULTS = {
  // archive.today has several interchangeable mirror domains. .ph tends to be
  // the most reliably reachable; users can switch this in the options page.
  base: "https://archive.ph",
  // "newtab" keeps the original page open (nice when you want both); "sametab"
  // navigates the current tab in place.
  openIn: "newtab",
};

async function getSettings() {
  const stored = await chrome.storage.sync.get(DEFAULTS);
  return { ...DEFAULTS, ...stored };
}

// Pages we can't usefully archive (browser internals, the store, local files).
function isArchivable(url) {
  return /^https?:\/\//i.test(url || "");
}

function buildNewestUrl(base, pageUrl) {
  // archive.today wants the target URL appended raw after /newest/.
  return `${base.replace(/\/+$/, "")}/newest/${pageUrl}`;
}

async function openArchive(tab) {
  if (!tab || !isArchivable(tab.url)) {
    // Give the user a hint instead of silently doing nothing.
    chrome.action.setBadgeText({ text: "n/a", tabId: tab?.id });
    chrome.action.setBadgeBackgroundColor({ color: "#b00020", tabId: tab?.id });
    setTimeout(() => chrome.action.setBadgeText({ text: "", tabId: tab?.id }), 1500);
    return;
  }

  const { base, openIn } = await getSettings();
  const archiveUrl = buildNewestUrl(base, tab.url);

  if (openIn === "sametab") {
    await chrome.tabs.update(tab.id, { url: archiveUrl });
  } else {
    await chrome.tabs.create({ url: archiveUrl, index: tab.index + 1 });
  }
}

// Toolbar click → newest snapshot.
chrome.action.onClicked.addListener((tab) => {
  openArchive(tab);
});

// Right-click menu, so it also works from the page/link context.
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "archive-newest",
    title: "Open newest archive.today snapshot",
    contexts: ["page", "action"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "archive-newest") openArchive(tab);
});
