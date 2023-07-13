import { useParams, useNavigate } from 'react-router-dom';
import mockData from '../../data/mockData.json';

const Details = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const item = mockData[id];

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>
        ${item.price}
        <p>{item.description}</p>
      </h2>
      <button>
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
