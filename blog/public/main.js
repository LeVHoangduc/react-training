import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import markdownToJSON from './markdownToJson.js'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)
console.log(__dirname)
const dirPath = path.join(__dirname, '../public/markdowns')

let postList = []

const getYear = (data) => {
  const dateString = data.date

  // Create a Date object by parsing the date string
  const dateObject = new Date(dateString)

  // Get the year from the Date object
  const year = dateObject.getFullYear()

  return year
}

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('Failed to list contents of directory: ' + err)
    }
    files.forEach((file, i) => {
      fs.readFile(`${dirPath}/${file}`, 'utf-8', (err, contents) => {
        let jsonData = markdownToJSON(contents)

        jsonData = {
          ...jsonData,
          id: i + 1
        }

        postList.push(jsonData)

        if (i === files.length - 1) {
          const sortedList = postList.sort((a, b) => {
            const yearA = getYear(a)
            const yearB = getYear(b)

            return yearA < yearB ? 1 : -1
          })
          console.log(sortedList)
          let data = JSON.stringify(sortedList)
          fs.writeFileSync('src/Jsons/posts.json', data)
        }
      })
    })
  })
}

getPosts()
