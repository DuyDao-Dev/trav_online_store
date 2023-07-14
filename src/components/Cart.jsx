import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import { useNavigate } from 'react-router-dom';


function Cart() {

  const navigate = useNavigate();
  const cartList = useSelector((store) => store.cartListReducer);

  useEffect(() => {
    console.log('cartList', cartList);
    //run script for Predictive Model
  }, []);

  

  return (
    <div>
      {!cartList.length ? (
        <h1>No Food Items Found!</h1>
      ) : (
        cartList.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))
      )}
      <button onClick={() => navigate("/payment")}>Checkout</button>
    </div>
  );
};

export default Cart;