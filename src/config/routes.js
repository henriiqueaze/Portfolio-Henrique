export const HOME_ROUTE = "/";
export const WORK_ROUTE = "/work";

export function createProjectRoute(projectSlug) {
  return `${WORK_ROUTE}/${projectSlug}`;
}

export function resolveAppRoute(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, "") || HOME_ROUTE;

  if (normalizedPath === WORK_ROUTE) {
    return { name: "work" };
  }

  if (normalizedPath.startsWith(`${WORK_ROUTE}/`)) {
    return {
      name: "project",
      projectSlug: decodeURIComponent(normalizedPath.slice(WORK_ROUTE.length + 1)),
    };
  }

  return { name: "home" };
}
