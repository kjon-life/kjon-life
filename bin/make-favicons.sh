#!/usr/bin/env bash
# Regenerates the favicon set from the bull avatar. Needs ImageMagick 7 (`magick`).
# Run from the repository root: bin/make-favicons.sh
set -euo pipefail

SRC=public/brand/bull/bull-gold.png
OUT=public/images/favicon
GOLD='#C88304'   # brand highlight
TILE='#0D0D12'   # the avatar's background
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

# tile <size> <bull width as % of tile> <line thickening in source px> <corner radius as % of tile>
tile() {
  local size=$1 fill=$2 thicken=$3 radius=$4
  local big=$((size * 8))
  local bull=$((big * fill / 100))
  local r=$((big * radius / 100))

  # the bull's shape only, optionally thickened so the line survives at small sizes
  magick "$SRC" -alpha extract -bordercolor black -border 40 \
    -morphology Dilate "Disk:$thicken" -trim +repage "$TMP/shape.png"
  magick "$TMP/shape.png" -resize "${bull}x${bull}" "$TMP/shape-fit.png"
  magick "$TMP/shape-fit.png" \( +clone -fill "$GOLD" -colorize 100 \) +swap \
    -alpha off -compose CopyOpacity -composite "$TMP/bull.png"

  if [ "$radius" -eq 0 ]; then
    magick -size "${big}x${big}" "xc:$TILE" "$TMP/ground.png"
  else
    magick -size "${big}x${big}" xc:none -fill "$TILE" \
      -draw "roundrectangle 0,0 $((big - 1)),$((big - 1)) $r,$r" "$TMP/ground.png"
  fi
  magick "$TMP/ground.png" "$TMP/bull.png" -gravity center -compose over -composite \
    -resize "${size}x${size}" -depth 8 "PNG32:$TMP/tile-$size.png"
}

# home-screen icons: square tile, bull with room around it
tile 512 64 0 0;  cp "$TMP/tile-512.png" "$OUT/android-chrome-512x512.png"
tile 192 64 0 0;  cp "$TMP/tile-192.png" "$OUT/android-chrome-192x192.png"
tile 180 64 0 0;  cp "$TMP/tile-180.png" "$OUT/apple-touch-icon.png"

# browser-tab icons: rounded tile, bull drawn large and thickened
tile 48 84 3 14
tile 32 86 4 14;  cp "$TMP/tile-32.png" "$OUT/favicon-32x32.png"
tile 16 92 6 14;  cp "$TMP/tile-16.png" "$OUT/favicon-16x16.png"

magick "$TMP/tile-16.png" "$TMP/tile-32.png" "$TMP/tile-48.png" public/favicon.ico
echo "favicons written to $OUT and public/favicon.ico"
