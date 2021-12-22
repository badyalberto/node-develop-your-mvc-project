const app = require("./server");
const seedData = require("./db/seed");
const connect = require("./db/connect");
const db = require("./models");

(async function onServeInit() {
  await connect();
  app.listen(4000, async () => {
    console.log(`Server listening on http:localhost:4000`);
    const data = await db.Product.find();
    data[0] ? null : seedData();
  });
})();

// connect().then(async function onServeInit() {
//   app.listen(4000, () => {
//     console.log(`Server listening on http:localhost:4000`);
//     seedData();
//   });
// });
