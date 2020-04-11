export default () => {
  let isDark = false

  try {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  } catch (error) {
  }

  return isDark
}