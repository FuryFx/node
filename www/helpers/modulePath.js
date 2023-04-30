
const path = require('path')

let raed = (red) => path.resolve(__dirname, '../views', `${red}.ejs`)

module.exports = raed;



// выносим модуль чтения в отдельный файл для гибкости проекта ru
// move the reader module to a separate file for project flexibility eng


