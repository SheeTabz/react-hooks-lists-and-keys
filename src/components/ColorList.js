import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
 const mapping = colors.map(item => {
  return <li key={item} style ={{color: item}}>{item}</li>
 })
  return (
    <React.Fragment>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {mapping}
     
      </ol>
    </React.Fragment>
  );
}

export default ColorList;
