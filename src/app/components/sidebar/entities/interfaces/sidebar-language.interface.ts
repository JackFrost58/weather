export interface LanguageSidebar {
  en: LanguageSidebarElement,
  ru: LanguageSidebarElement,
  [key: string]: LanguageSidebarElement
}

export interface LanguageSidebarElement {
  pages: string[],
  system: {
    settings: string,
    logout: string,
    login: string
  }
}