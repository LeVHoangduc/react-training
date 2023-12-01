import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import markdownToJSON from './markdownToJson.js'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const dirPath = path.join(__dirname, '../data/markdowns')

let postList = []

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('Failed to list contents of directory: ' + err)
    }

    files.forEach((file, i) => {
      console.log('before', i)
      fs.readFile(`${dirPath}/${file}`, 'utf-8', (err, contents) => {
        if (err) {
          return console.log('Failed to list file of files: ' + err)
        }

        let jsonData = markdownToJSON(contents)

        jsonData = {
          ...jsonData,
          id: i + 1
        }

        postList.push(jsonData)

        if (postList.length === files.length) {
          const sortedList = postList.sort((a, b) => {
            const yearA = new Date(a.date).getTime()
            const yearB = new Date(b.date).getTime()

            return yearA < yearB ? 1 : -1
          })
          let data = JSON.stringify(sortedList)
          fs.writeFileSync('data/jsons/posts.json', data)
        }
      })
    })
  })
}

getPosts()
