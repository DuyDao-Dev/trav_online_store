import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import ItemsList from "./ItemsList";
import FetchAll from "./FetchAll";

const DropDown = () => {
  const categories = ['pepsi', 'yogurt ', 'cheese', 'salad ', 'fish', 'beef', 'strawberry', 'chicken'];
  const [category, setCategory] = useState("");

  const results = useQuery(['all', category], FetchAll);
  const items = results?.data ?? [];

  return (
    <section>
      <div className="dropdown-content">
        <form>
          <label htmlFor="category">
            Choose a Category!
            <select
              id="dropdown"
              value={category}
              onChange={(e) => {
                e.preventDefault();
                setCategory(e.target.value)
              }}
            >
              <option>--</option>
              {categories.map((category) => (
                <option key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <ItemsList items={items}/>
    </section>
  );
};

export default DropDown;
