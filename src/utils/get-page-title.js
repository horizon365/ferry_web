import defaultSettings from '@/settings'

var title = defaultSettings.title || '浚弘管理平台'

export default function getPageTitle(pageTitle, globalTitle) {
  if (globalTitle !== undefined && globalTitle !== null) {
    title = globalTitle
  }
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
