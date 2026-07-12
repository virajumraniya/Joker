import { useState,useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let upCountx = () => {
    setCountx((currCount) => currCount + 1);
    // console.log(count);
  };

  let upCounty = () => {
    setCounty((currCount) => currCount + 1);
    // console.log(count);
  };

  useEffect(function printSomething() {
    console.log("this is a side-effect");
  },[countx]);

  return (
    <div>
      <h3>CountX = {countx}</h3>
      <button onClick={upCountx}>+1</button>
       <h3>CountY = {county}</h3>
      <button onClick={upCounty}>+1</button>
    </div>
  );
}
