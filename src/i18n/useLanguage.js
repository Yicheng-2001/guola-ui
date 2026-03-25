import { computed } from 'vue'
import { i18n } from './index'
import { LANG_STORAGE_KEY, SUPPORTED_LANGUAGES } from './messages'

export function useLanguage() {
  const currentLang = computed(() => i18n.global.locale.value)

  function setLanguage(lang) {
    if (!Object.prototype.hasOwnProperty.call(SUPPORTED_LANGUAGES, lang)) return
    i18n.global.locale.value = lang
    localStorage.setItem(LANG_STORAGE_KEY, lang)
  }

  function getLanguageLabel(lang = currentLang.value) {
    return SUPPORTED_LANGUAGES[lang] || SUPPORTED_LANGUAGES.zh
  }

  function t(key) {
    return i18n.global.t(key)
  }

  return {
    currentLang,
    setLanguage,
    getLanguageLabel,
    t
  }
}
