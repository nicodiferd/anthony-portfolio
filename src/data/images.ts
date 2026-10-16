/**
 * Intrinsic pixel sizes of the images in public/, keyed by their URL path.
 *
 * Components pass these as width/height so the browser reserves the right box
 * before the file arrives (no layout shift). CSS still decides the displayed
 * size. Regenerate the files with scripts/optimize-images.sh and update the
 * numbers here when an image changes (`sips -g pixelWidth -g pixelHeight`).
 */
export const imageSizes: Record<string, { width: number; height: number }> = {
  "/anthony.webp": { width: 1134, height: 1512 },
  "/anthony-640.webp": { width: 640, height: 854 },
  "/asu.webp": { width: 600, height: 400 },
  "/micro_processor.webp": { width: 600, height: 400 },
  "/crane.webp": { width: 600, height: 396 },
  "/jet_white.webp": { width: 600, height: 374 },
  "/treadmill.webp": { width: 1251, height: 675 },
  "/solid_works_design.webp": { width: 1002, height: 754 },
  "/yield_strength.webp": { width: 1162, height: 702 },
}
