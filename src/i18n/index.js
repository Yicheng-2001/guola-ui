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

function resolveLanguage(lang = getCurrentLanguage()) {
  return isSupportedLanguage(lang) ? lang : 'zh'
}

function interpolate(template, values = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, token) => {
    if (Object.prototype.hasOwnProperty.call(values, token)) {
      return String(values[token])
    }
    return `{${token}}`
  })
}

export function getMessageText(key, lang = getCurrentLanguage(), values = {}) {
  if (!key) return ''
  const locale = resolveLanguage(lang)
  const fallbackLocale = 'zh'
  const template = messages?.[locale]?.[key] ?? messages?.[fallbackLocale]?.[key]
  if (template === undefined || template === null) return ''
  return interpolate(template, values)
}

export function applyI18nToDom(root = document, lang = getCurrentLanguage()) {
  if (!root) return
  const locale = resolveLanguage(lang)

  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    const text = getMessageText(key, locale)
    if (text) el.innerHTML = text
  })

  root.querySelectorAll('[data-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-placeholder')
    const text = getMessageText(key, locale)
    if (text) el.placeholder = text
  })

  root.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title')
    const text = getMessageText(key, locale)
    if (text) el.title = text
  })
}

export function syncLangItemActiveState(lang = getCurrentLanguage(), root = document) {
  if (!root) return
  const locale = resolveLanguage(lang)
  root.querySelectorAll('.lang-item').forEach((item) => {
    const itemLang = item.getAttribute('data-lang')
    const itemI18n = item.getAttribute('data-i18n')
    const isActive = itemLang ? itemLang === locale : itemI18n === `lang_${locale}`

    item.dataset.active = isActive ? 'true' : 'false'
    item.classList.toggle('text-zinc-900', isActive)
    item.classList.toggle('font-bold', isActive)
    item.classList.toggle('bg-zinc-50', isActive)
    item.classList.toggle('text-zinc-500', !isActive)
    item.classList.toggle('font-medium', !isActive)
  })
}

export function switchLanguage(lang, root = document) {
  const locale = resolveLanguage(lang)
  const ok = setLanguage(locale)
  if (!ok) return false
  applyI18nToDom(root, locale)
  syncLangItemActiveState(locale, root)
  return true
}

