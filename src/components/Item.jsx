import { Link } from 'react-router-dom';
import { imgList } from './ImgList';

const Item = ( {unit_id, product_name, price, popularity, durability, daysuntilexpiration, barcode }) => {

  let img = '';

  for (let key in imgList) {
    if (product_name === key) {
      img = imgList[key][(Math.floor(Math.random() * imgList[key].length))];
    }
  }

  return (
    <Link to={`/details/${unit_id}`} className='item'>
      <div className='image-container'>
        <img src={img} alt={product_name}/>
      </div>
      <div className='info'>
        <h1>{product_name}</h1>
        <h2>${price} - Popularity: {popularity}</h2>
      </div>
    </Link>
  )
};

export default Item;