import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroupApp() {
  let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Days = [];
  return (
    <Fragment>
      <h1>List</h1>
      {Days.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {Days.map((Day, index) => (
          <li
            key={Day}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {Day}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroupApp;
