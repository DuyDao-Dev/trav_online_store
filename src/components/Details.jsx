import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import mockData from '../../data/mockData.json';

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const item = mockData[id];

  const addToCart = (item) => {

    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    });

  }

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>
        ${item.price}
        <p>{item.description}</p>
      </h2>
      <button
        onClick={() => addToCart(item)}>
        Add to Cart
      </button>
      <button
        onClick={() => navigate('/')}
      >
        Keep Shopping
      </button>
    </div>
  )
};

export default Details;
