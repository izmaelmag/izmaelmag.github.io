export enum ThemeNames {
  dark = 'dark',
  light = 'light'
}

export interface PageThemeI {
  theme: {
    background: string,
    text: string,
    textSecondary: string,
    gray: string
  }
}

const DarkTheme = {
  background: '#101010',
  text: '#fafafa',
  textSecondary: 'rgba(255, 255, 255, 0.75)',
  gray: 'rgba(255, 255, 255, 0.1)',
}

const LightTheme = {
  background: '#fafafa',
  text: '#222',
  textSecondary: 'rgba(0, 0, 0, 0.5)',
  gray: 'rgba(0, 0, 0, 0.1)',
}

export const PageThemes = {
  [ThemeNames.dark]: {
    ...DarkTheme,
    inverted: LightTheme
  },

  [ThemeNames.light]: {
    ...LightTheme,
    inverted: DarkTheme
  },
}
