import { i18n } from './index'

function hasKey(key) {
  return i18n.global.te(key)
}

export function applyI18nToDom(root = document) {
  if (!root) return

  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (!key || !hasKey(key)) return
    el.innerHTML = i18n.global.t(key)
  })

  root.querySelectorAll('[data-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-placeholder')
    if (!key || !hasKey(key)) return
    el.placeholder = i18n.global.t(key)
  })

  root.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title')
    if (!key || !hasKey(key)) return
    el.title = i18n.global.t(key)
  })
}

export function syncLangItemActiveState(lang, root = document) {
  if (!root) return

  root.querySelectorAll('.lang-item').forEach((item) => {
    const itemLang = item.getAttribute('data-lang')
    if (itemLang) {
      item.dataset.active = itemLang === lang ? 'true' : 'false'
    }
  })
}
