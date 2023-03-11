export const truncateText = (text = '', n) => {
  if (text.length >= n) {
    return `${text.substr(0, n)}...`
  }

  return text
}
