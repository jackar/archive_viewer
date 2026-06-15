const DEFAULTS = { base: "https://archive.ph", openIn: "newtab" };

const baseEl = document.getElementById("base");
const openInEl = document.getElementById("openIn");
const statusEl = document.getElementById("status");

async function restore() {
  const { base, openIn } = await chrome.storage.sync.get(DEFAULTS);
  baseEl.value = base;
  openInEl.value = openIn;
}

async function save() {
  await chrome.storage.sync.set({ base: baseEl.value, openIn: openInEl.value });
  statusEl.classList.add("show");
  setTimeout(() => statusEl.classList.remove("show"), 1200);
}

document.getElementById("save").addEventListener("click", save);
restore();
