export interface languageSearchType {
  searchField: string,
  defaultCity: string,
}

export interface languageHeaderType {
  en: languageSearchType,
  ru: languageSearchType,
  [key: string]: languageSearchType
}