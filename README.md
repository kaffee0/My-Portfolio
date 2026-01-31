# tsuchifumazu clone (local scaffold)

This folder is a runnable scaffold from the three exported files.

## Run

### 1) Start a local static server

```bash
cd tsuchifumazu_clone
python3 -m http.server 8000
```

### 2) Open in browser

- http://localhost:8000/

## What’s missing

- The original site uses many assets under `/img` (icons, photos, work images, etc.).
- I generated placeholder files for the most common references so the page can load.
- For a true 1:1 reproduction, you’ll need to download the real `/img/*` assets and place them into `img/`.

## Where to get the missing assets

Use Chrome DevTools → Network tab while loading the original site and filter by `img/`.
Then download those files and mirror the same paths locally.

