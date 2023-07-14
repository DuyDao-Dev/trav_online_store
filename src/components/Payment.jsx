import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Payment() {

  
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const cartList = useSelector((store) => store.cartListReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
     event.preventDefault();

     //TODO replace console.log with axios POST request
     console.log("Address: ", address, "Payment: ", payment, "Cart: ", cartList);
      setAddress("");
      setPayment("");

      dispatch({
        type: "CLEAR_CART",
      });
      navigate("/");
   };

  //onSubmit function that will send Address, Payment Information, and Cart to the backend
  //need to send to API (axios POST request)



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <label>
          Payment Information:
          <input
            type="text"
            placeholder="Payment"
            value={payment}
            onChange={(event) => setPayment(event.target.value)}
          />{" "}
        </label>
        <button type="submit">Final Checkout</button>
      </form>
    </div>
  );
}

export default Payment;
