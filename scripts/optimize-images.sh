#!/usr/bin/env bash
# Regenerates the deployed images in public/ from the originals in source-images/.
#
# Originals stay in source-images/ (not deployed). Run this after adding or
# replacing an original, then commit both. Needs cwebp (brew install webp),
# sips (macOS) and python3 (only for the favicon SVG).
#
# Sizing rule: an image is never encoded wider than about 2x its largest
# on-page CSS width, and never upscaled. Display size is set by CSS, so a
# smaller file does not change how big the image looks.
set -euo pipefail

cd "$(dirname "$0")/.."
SRC=source-images
OUT=public

webp() { # webp <src> <dest> <width or 0 for original> [extra cwebp args...]
  local src=$1 dest=$2 width=$3
  shift 3
  local resize=()
  if [ "$width" != "0" ]; then resize=(-resize "$width" 0); fi
  cwebp -quiet -m 6 -sharp_yuv -metadata none ${resize[@]+"${resize[@]}"} "$@" "$SRC/$src" -o "$OUT/$dest"
}

# Hero headshot: shown at most ~800 CSS px wide, so full size covers 1.4x DPR
# at the widest layout and the 640w file covers phones and the desktop column.
webp anthony.jpeg anthony.webp 0 -q 80
webp anthony.jpeg anthony-640.webp 640 -q 80

# Career-highlight tiles: at most ~96 px tall (about 145 px with the ASU 1.4x
# scale), so 600 px wide is over 3x DPR.
webp asu.png asu.webp 600 -q 85 -alpha_q 100
webp micro_processor.png micro_processor.webp 600 -q 85 -alpha_q 100
webp crane.jpeg crane.webp 600 -q 85
webp jet_white.jpeg jet_white.webp 600 -q 85

# Project figures: up to ~700 CSS px wide, originals are smaller, keep size.
webp treadmill.png treadmill.webp 0 -q 85
webp solid_works_design.png solid_works_design.webp 0 -lossless -z 9
webp yield_strength.png yield_strength.webp 0 -q 85

# Social preview (Open Graph / Twitter): 1200x630 JPEG crop of the headshot.
# JPEG on purpose: some link-preview crawlers still skip WebP.
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
sips -s format jpeg "$SRC/anthony.jpeg" --out "$tmp/head.jpg" >/dev/null
sips -c 595 1134 --cropOffset 400 0 "$tmp/head.jpg" --out "$tmp/crop.jpg" >/dev/null
sips -z 630 1200 -s formatOptions 82 "$tmp/crop.jpg" --out "$OUT/og-image.jpg" >/dev/null

# Favicon: the traced AD1 mark carries six-decimal coordinates; whole units on
# a 1024 viewBox are invisible at icon size and cut the gzipped file by ~70%.
python3 - "$SRC/AD1.svg" "$OUT/AD1.svg" <<'PY'
import re, sys
svg = open(sys.argv[1], encoding="utf-8").read()
def path_data(m):
    d = re.sub(r"-?\d+\.\d+", lambda n: str(round(float(n.group(0)))), m.group(1))
    d = re.sub(r"\s*([MCLZz])\s*", r"\1", d.strip())
    d = re.sub(r"\s+", " ", d)
    return 'd="' + re.sub(r" ?, ?", ",", d) + '"'
svg = re.sub(r'd="([^"]*)"', path_data, svg)
svg = svg.replace(' opacity="1.000000"', "")
svg = re.sub(r"\s+", " ", svg).replace("> <", "><")
open(sys.argv[2], "w", encoding="utf-8").write(svg.strip() + "\n")
PY

# PNG fallbacks for browsers and iOS home screens that ignore SVG icons.
qlmanage -t -s 512 -o "$tmp" "$SRC/AD1.svg" >/dev/null 2>&1
sips -z 180 180 "$tmp/AD1.svg.png" --out "$OUT/apple-touch-icon.png" >/dev/null
sips -z 32 32 "$tmp/AD1.svg.png" --out "$OUT/favicon-32.png" >/dev/null

ls -l "$OUT"
