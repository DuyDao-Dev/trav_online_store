import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import DropDown from "./components/DropDown";
import mockData from '../data/mockData.json';
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import cartListReducer from "./redux/reducers/cartListReducer.js";

const storeInstance = createStore(
  combineReducers({
    cartListReducer,
  }),
);


const App = () => {
  // using dummy data
  const [items, setItems] = useState(mockData);

  return (
    <Provider store={storeInstance}>
      <BrowserRouter>
        <header>
          <Link to="/">Online Store</Link>
          <Link to="/cart">Cart</Link>
        </header>
        <Routes>
          <Route path="/" element={<DropDown items={items} />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// product_name, timestamp, unit_id, popularity, price, dateuntilexpirationdate, barcode