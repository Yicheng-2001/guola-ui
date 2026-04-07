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

