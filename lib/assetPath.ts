export function encodeImagePath(src: string): string {
  if (!src.startsWith("/")) return src;

  return src
    .split("/")
    .map((segment, index) => {
      if (index === 0) return segment;
      try {
        return encodeURIComponent(decodeURIComponent(segment));
      } catch {
        return encodeURIComponent(segment);
      }
    })
    .join("/");
}

export function assetPath(src: string): string {
  const normalized = encodeImagePath(src);
  if (!normalized.startsWith("/")) return normalized;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath || normalized.startsWith(basePath)) return normalized;

  return `${basePath}${normalized}`;
}
