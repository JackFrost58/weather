import {LanguageSidebar} from "../interfaces/sidebar-language.interface";

export const languageSidebar: LanguageSidebar = {
  en: {
    pages: ['Dashboard', 'Map', 'Health', 'Wallet'],
    system: {
      settings: 'Settings',
      logout: 'Logout account',
      login: 'Login'
    }
  },
  ru: {
    pages: ['Главная', 'Карта', 'Здоровье', 'Кошелек'],
    system: {
      settings: 'Настройки',
      logout: 'Выход из аккаунта',
      login: 'Войти'
    }
  }
}