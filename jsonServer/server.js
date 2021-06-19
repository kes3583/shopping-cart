// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./jsonServer/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Headers","X-Total-Count");
  next();
})
// router.render = (req, res) => {
//   // add count meta to paginated requests
//   console.log('res.locals.data :>> ', res.locals.data);
//     // res.jsonp({
//     //   results: res.locals.data,
//     //   meta: {
//     //     count: res.get("X-Total-Count"),
//     //   },
//     // });
  
// };
server.use(router)


server.listen(5005, () => {
  console.log('JSON Server is running!!!!!!!')
})