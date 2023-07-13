import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import DropDown from "./components/DropDown";
import mockData from '../data/mockData.json';

const App = () => {

  // using dummy data
  const [items, setItems] = useState(mockData);

  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Online Store</Link>
      </header>
      <Routes>
        <Route path='/' element={<DropDown items={items} />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// product_name, timestamp, unit_id, popularity, price, dateuntilexpirationdate, barcode