# Archive Viewer

A tiny Chrome extension: click the toolbar icon and you're taken to the **most
recent [archive.today](https://archive.today) snapshot** of the page you're on.
Great for slipping past paywalls and reading dead links.

## How it works

archive.today exposes a `newest` endpoint that redirects to the latest snapshot
of any URL:

```
https://archive.ph/newest/https://example.com/article
```

The extension just builds that URL from your current tab and opens it. No API
key, no account, no tracking.

## Install (unpacked)

1. Open `chrome://extensions`
2. Toggle **Developer mode** (top right)
3. Click **Load unpacked** and select this folder
4. Pin the icon to your toolbar for one-click access

## Use

- **Click the toolbar icon** → opens the newest snapshot of the current page.
- **Right-click the page** → *Open newest archive.today snapshot*.
- If no snapshot exists yet, archive.today offers to create one.

## Options

Right-click the icon → **Options** (or `chrome://extensions` → *Details* →
*Extension options*):

- **Archive mirror** — switch between interchangeable mirrors (`archive.ph`,
  `archive.today`, `archive.is`, …) if one is blocked or slow.
- **Open snapshot in** — a new tab (default) or the current tab.

## Files

| File | Purpose |
| --- | --- |
| `manifest.json` | Manifest V3 definition |
| `background.js` | Service worker: builds the `newest` URL and opens it |
| `options.html` / `options.js` | Settings page |
| `icons/` | Toolbar icons (rendered from `icon.svg`) |

## License

MIT
