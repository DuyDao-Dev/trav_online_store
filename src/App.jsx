import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from "./components/Details";
import DropDown from "./components/DropDown";

import Cart from "./components/Cart";
import Payment from "./components/Payment";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import cartListReducer from "./redux/reducers/cartListReducer.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const storeInstance = createStore(
  combineReducers({
    cartListReducer,
  }),
);

const App = () => {

  return (
    <Provider store={storeInstance}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to='/'>DLDP Store</Link>
            <Link to="/cart">Cart</Link>
          </header>
          <Routes>
            <Route path='/' element={<DropDown />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);