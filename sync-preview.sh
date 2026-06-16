#!/usr/bin/env bash
# Build the Brands Box site and sync it into the dir the Claude preview
# server (brand-preview, port 8888) actually serves. Run after any source edit,
# then reload the preview.
set -euo pipefail
cd "$(dirname "$0")"

echo "▶ building…"
npm run build | tail -3

WT="/Users/nicholastsiflikiotis/tsifulator.ai/.claude/worktrees/practical-wiles-ee94e4/brand"
mkdir -p "$WT"
# Remove only previously-synced Astro output; keep the Tsifulator brand assets.
rm -rf "$WT/_astro" "$WT/about" "$WT/brands" "$WT/contact" "$WT/showroom" \
       "$WT/favicon.svg" "$WT/index.html"
cp -R dist/. "$WT/"
echo "✓ synced → http://localhost:8888/"
