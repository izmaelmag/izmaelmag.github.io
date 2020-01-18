export enum ThemeNames {
  dark = 'dark',
  light = 'light'
}

export interface PageThemeI {
  theme: {
    background: string,
    text: string,
    gray: string
  }
}

export const PageThemes = {
  [ThemeNames.dark]: {
    background: '#101010',
    text: '#fafafa',
    gray: 'rgba(255, 255, 255, 0.1)'
  },

  [ThemeNames.light]: {
    background: '#fafafa',
    text: '#222',
    gray: 'rgba(0, 0, 0, 0.3)'
  },
}
