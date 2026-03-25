import { createI18n } from 'vue-i18n'
import { LANG_STORAGE_KEY, messages } from './messages'

const savedLang = localStorage.getItem(LANG_STORAGE_KEY)
const locale = savedLang && Object.prototype.hasOwnProperty.call(messages, savedLang) ? savedLang : 'zh'

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'zh',
  globalInjection: true,
  messages
})
