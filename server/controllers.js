const { Item } = require("./db");

exports.getAll = (req, res) => {
  Item.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(501).send({ alert: 'Error getting all items' }, err);
    });
};

exports.getItems = (req, res) => {
  const product_name = req.params.name;
  Item.find({ product_name })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(501).send({ alert: `Error getting all items from same category ${product_name}` }, err);
    });
};

exports.getItem = (req, res) => {
  const unit_id = req.params.id;
  Item.findOne({ unit_id })
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(501).send({ alert:`Error getting item with id ${unit_id}` }, err);
  });
};