import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";

const DropDown = ({ items }) => {
  const categories = ["Dairy", "Meat", "Vegetables", "Fruits"];
  const [category, setCategory] = useState("Dairy");
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    //TODO replace console.log with axios GET request
      console.log(category);
      //TODO replace items.filter with axios GET response
      setItemsToDisplay(items.filter((item) => item.category === category));
  }, [category]);

  return (
    <section>
      <div className="dropdown-content">
        <form>
          <label htmlFor="category">
            Category
            <select
              id="dropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <ItemsList items={itemsToDisplay}/>
    </section>
  );
};

export default DropDown;
