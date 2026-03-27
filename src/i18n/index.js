import { createI18n } from 'vue-i18n'
import { computed } from 'vue'
import zh from './zh'
import en from './en'
export const LANG_STORAGE_KEY = 'guolaya-lang'
export const SUPPORTED_LANGUAGES = {
  zh: '\u4e2d\u6587',
  en: 'English'
}
export const messages = {
  zh,
  en
}
function isSupportedLanguage(lang) {
  return Object.prototype.hasOwnProperty.call(SUPPORTED_LANGUAGES, lang)
}
const savedLang = localStorage.getItem(LANG_STORAGE_KEY)
const locale = isSupportedLanguage(savedLang) ? savedLang : 'zh'
export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'zh',
  globalInjection: true,
  messages
})
export function getCurrentLanguage() {
  return i18n.global.locale.value
}
export function setLanguage(lang) {
  if (!isSupportedLanguage(lang)) return false
  i18n.global.locale.value = lang
  localStorage.setItem(LANG_STORAGE_KEY, lang)
  return true
}
export function getLanguageLabel(lang = getCurrentLanguage()) {
  return SUPPORTED_LANGUAGES[lang] || SUPPORTED_LANGUAGES.zh
}
export function t(key, values) {
  return i18n.global.t(key, values)
}
export function useLanguage() {
  const currentLang = computed(() => i18n.global.locale.value)
  return {
    currentLang,
    setLanguage,
    getLanguageLabel,
    t
  }
}
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

