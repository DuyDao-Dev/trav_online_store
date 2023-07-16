const { Item } = require("./db.js");
const itemData = require("../product_list.json");

Item.deleteMany({})
  .then(() => Promise.all(itemData.map((item) => Item.create(item))))
  .then(() => console.log("Item collection has been reset!"))
  .catch((err) => console.log("Error resetting Item collection: ", err))
  .then(() => process.exit());
