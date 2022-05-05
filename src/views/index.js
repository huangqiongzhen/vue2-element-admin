
const files = require.context('./', true, /\/*\/*.router.js$/)
const viewsRouters = files.keys().reduce((prev, modulePath) => {
  for (const key in files(modulePath)) {
    prev.push(files(modulePath)[key]())
  }
  return prev
}, [])
export default viewsRouters
