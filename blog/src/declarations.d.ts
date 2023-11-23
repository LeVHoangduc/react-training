declare module '*.md' {
  const content: string
  export default content
}

declare module '../src/Jsons/posts.json' {
  const postList: Json // Replace YourType with the actual type of your JSON content
  export default postList
}
