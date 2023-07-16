const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require(dotenv).config();

let cartList = require ('./src/redux/reducers/cartList');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 3000;

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

/* ==================== MIDDLEWARES HERE =========================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* ==================== SET UP ROUTES HERE ========================= */
app.use('/', (req, res) => res.send('Server is running!'));

// POST route to add items to cart (Only use if we're POSTing to the server)
router.post('/cartList', (req, res) => {
    console.log('cartList', cartList);
    cartList.push(req.body);
    res.send(cartList);
    }
);
    
module.exports = router;

