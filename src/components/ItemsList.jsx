import Item from "./Item";

const ItemsList = ({ items }) => {
  return (
    <div>
      {!items.length ? (
        <h1>No Food Items Found!</h1>
      ) : (
        items.map((item) => (
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
    </div>
  )
};

export default ItemsList;
