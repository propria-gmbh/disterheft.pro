export const withBase = (path) => {
  if (!path) {
    return path;
  }

  if (path.startsWith("#")) {
    return path;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const baseTrimmed = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!baseTrimmed) {
    return normalizedPath;
  }

  if (normalizedPath.startsWith(`${baseTrimmed}/`)) {
    return normalizedPath;
  }

  return `${baseTrimmed}${normalizedPath}`;
};
