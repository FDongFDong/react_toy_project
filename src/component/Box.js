import React from 'react';
import '../App.css';
const Box = (props) => {
  console.log(props);
  return (
    <div className="Box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />

      <h2 className={`${props.result}`}>{props.result}</h2>
    </div>
  );
};

export default Box;
