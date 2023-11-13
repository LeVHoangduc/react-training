export async function convertMarkDownToString() {
  const response = await import('../markdowns/howToInstallReact.md')
  const text = await fetch(response.default).then((res) => res.text())
  return text
}
