/** @type {import('next-i18next').UserConfig} */
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'pt-BR', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}