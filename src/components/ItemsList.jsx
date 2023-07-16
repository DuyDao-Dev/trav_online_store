import Item from "./Item";

const ItemsList = ({ items }) => {
  return (
    <div>
      {!items.length ? (
        <div>
          <h1>Page Still Loading Items!</h1>
          <div className='loading-pane'>
            <h2 className='loader'>🦔</h2>
          </div>
        </div>
      ) : (
        items.map((item) => (
          <Item
            key={item.unit_id}
            unit_id={item.unit_id}
            product_name={item.product_name}
            price={item.price}
            popularity={item.popularity}
            durability={item.durability}
            daysuntilexpiration={item.daysuntilexpiration}
            barcode={item.barcode}
          />
        ))
      )}
    </div>
  )
};

export default ItemsList;
