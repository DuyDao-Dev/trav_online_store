import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FetchItem from './FetchItem';
import Item from './Item';
import { imgList } from './ImgList';

const Details = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const result = useQuery(['details', id], FetchItem);

  if (result.isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>🦔</h2>
      </div>
    )
  }

  const item = result?.data;
  let img = '';

  for (let key in imgList) {
    if (item.product_name === key) {
      img = imgList[key][(Math.floor(Math.random() * imgList[key].length))];
      console.log('image: ', img)
    }
  }

  return (
    <div className='item details'>
      <div className='image-container'>
        <img src={img} alt={item.product_name}/>
      </div>
      <div className='info'>
        <h1>{item.product_name}</h1>
        <h2>${item.price}</h2>
        <h3>
          <p>Popularity: {item.popularity}</p>
          <p>Durability: {item.durability}</p>
          <p>Days Until Expiration: {item.daysuntilexpiration}</p>
          <p>Barcode: {item.barcode}</p>
        </h3>
      </div>
      <button className='buttons'>
        Add to Cart
      </button>
      <button className='buttons'
        onClick={() => navigate('/')}
      >
        Keep Shopping
      </button>
    </div>
  )
};

export default Details;
