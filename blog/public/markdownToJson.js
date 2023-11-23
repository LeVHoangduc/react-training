function markdownToJSON(markdown) {
  const data = {
    title: '',
    author: '',
    link: '',
    date: '',
    image: '',
    tags: [],
    content: ''
  }

  const lines = markdown.split('\n')

  lines.forEach((line) => {
    const trimmedLine = line.trim()

    if (trimmedLine === '---') {
      return // Skip this line
    }

    if (trimmedLine.startsWith('title:')) {
      data.title = getValueFromLine(trimmedLine)
    } else if (trimmedLine.startsWith('author:')) {
      data.author = getValueFromLine(trimmedLine)
    } else if (trimmedLine.startsWith('link:')) {
      data.link = getValueFromLine(trimmedLine)
    } else if (trimmedLine.startsWith('date:')) {
      data.date = getValueFromLine(trimmedLine)
    } else if (trimmedLine.startsWith('image:')) {
      data.image = getValueFromLine(trimmedLine)
    } else if (trimmedLine.startsWith('tags:')) {
      data.tags = getArrayValueFromLine(trimmedLine)
    } else {
      // Assuming features are listed as bullet points under this heading
      data.content = data.content + '\n' + trimmedLine
    }
  })

  return data
}

function getValueFromLine(line) {
  return line.split(':').slice(1).join(':').trim()
}

function getArrayValueFromLine(line) {
  const value = getValueFromLine(line)
  return value.split(',').map((tag) => tag.trim())
}

export default markdownToJSON
