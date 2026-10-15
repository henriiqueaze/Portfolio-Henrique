const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");
const WORK_PATH = "/work";

export const HOME_ROUTE = `${BASE_PATH}/`;
export const WORK_ROUTE = `${BASE_PATH}${WORK_PATH}`;

export function createProjectRoute(projectSlug) {
  return `${WORK_ROUTE}/${projectSlug}`;
}

export function resolveAppRoute(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const routePath = BASE_PATH && normalizedPath.startsWith(`${BASE_PATH}/`)
    ? normalizedPath.slice(BASE_PATH.length)
    : normalizedPath === BASE_PATH
      ? "/"
      : normalizedPath;

  if (routePath === WORK_PATH) {
    return { name: "work" };
  }

  if (routePath.startsWith(`${WORK_PATH}/`)) {
    return {
      name: "project",
      projectSlug: decodeURIComponent(routePath.slice(WORK_PATH.length + 1)),
    };
  }

  return { name: "home" };
}
