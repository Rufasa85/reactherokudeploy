import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.filter(groc=>groc.purchased==false).map(item=> <li id={item.id} key={item.id}>{item.name}</li>)}
    </ul>
  );
}

export default List;
