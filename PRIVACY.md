# Privacy Policy — Archive Viewer

_Last updated: 2026-06-15_

Archive Viewer is designed to collect **no personal data**.

## What the extension does

When you click the Archive Viewer toolbar icon (or its right-click menu item),
the extension reads the URL of your current tab and opens the most recent
[archive.today](https://archive.today) snapshot of that page.

## Data collection

Archive Viewer does **not** collect, store, transmit, or sell any personal
information. Specifically:

- It has no analytics, telemetry, or tracking of any kind.
- It does not send data to any server operated by the developer — there is no
  backend.
- It does not store your browsing history. The current tab's URL is used only
  at the moment you click the extension, solely to build the archive link, and
  is not retained.
- Tracking parameters (such as `utm_*`) are stripped from the URL before the
  archive lookup.

## Data shared with third parties

To show you an archived snapshot, the extension opens a URL on
**archive.today** (or the mirror you select in settings) containing the address
of the page you chose to archive. This is the same as visiting archive.today
yourself. archive.today is an independent third party and is not operated by or
affiliated with the developer; its handling of requests is governed by its own
policies.

## Settings storage

Your preferences (which archive.today mirror to use, and whether to open
snapshots in a new tab or the current tab) are stored using Chrome's `storage`
API. This data stays in your browser/Chrome profile and is never transmitted to
the developer.

## Permissions

- **activeTab** — read the current tab's URL, only when you invoke the
  extension, to build the archive link.
- **contextMenus** — add a right-click menu item to trigger the same action.
- **storage** — save your mirror and open-in-tab preferences locally.

## Changes

If this policy changes, the updated version will be posted at this URL with a
new "Last updated" date.

## Contact

Questions or issues:
https://github.com/jackar/archive_viewer/issues
