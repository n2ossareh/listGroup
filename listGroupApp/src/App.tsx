import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroupApp from "./components/listGroup";

function App() {
  /*
  let items = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
  let heading = "Week Days";
  */
  let items = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let heading = "Months";

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  return (
    <div>
      <ListGroupApp items={items} heading={heading} onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
