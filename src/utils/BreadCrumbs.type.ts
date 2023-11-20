import type { Router } from 'vue-router'

export const BreadCrumbs = (router: Router, theme: string) => {
  const currentPath = router.currentRoute.value.path
  return `${currentPath}?theme=${theme}`
}
