import { Link } from 'react-router-dom';

const Item = ( {id, name, price, category, image }) => {
  let img = image;

  return (
    <Link to={`/details/${id}`} className='item'>
      <div className='image-container'>
        <img src={img} alt={name}/>
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>${price} - {category}</h2>
      </div>
    </Link>
  )
};

export default Item;