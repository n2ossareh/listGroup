import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items : string[];
  heading : string;
  onSelectItem: (item: string) => void; 
}

function ListGroupApp({items, heading, onSelectItem}: Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroupApp;
