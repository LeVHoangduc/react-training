export interface MarkdownData {
  title: string
  author: string
  link: string
  date: string
  image: string
  tags: string[]
  description: string
  content: string
}

function markdownToJSON(markdown: string): MarkdownData {
  const data: MarkdownData = {
    title: '',
    author: '',
    link: '',
    date: '',
    image: '',
    tags: [],
    description: '',
    content: ''
  }

  const lines = markdown.split('\n')

  lines.forEach((line) => {
    const trimmedLine = line.trim()

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
    } else if (trimmedLine.startsWith('description:')) {
      data.description = getValueFromLine(trimmedLine)
    } else {
      data.content = data.content + '\n' + trimmedLine
    }
  })

  return data
}

function getValueFromLine(line: string): string {
  return line.split(':').slice(1).join(':').trim()
}

function getArrayValueFromLine(line: string): string[] {
  const value = getValueFromLine(line)
  return value.split(',').map((tag) => tag.trim())
}

export default markdownToJSON
