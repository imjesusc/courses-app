export const formatAncorsUtilite = (text: string = '') => {
  const urlPattern = /https?:\/\/[^\s]+/g

  const newText = text.replace(urlPattern, (url) => {
    return `<a style="color: deeppink" href="${url}" target="_blank">${url}</a>`
  })
  return newText
}
