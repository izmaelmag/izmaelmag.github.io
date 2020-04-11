export default () => {
  let isDark = false

  try {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  } catch (error) {
    console.error(error)
  }

  return isDark
}