const str = `
010-1234-2345
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbcccddd
`

const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
console.log(str.match(regexp))=