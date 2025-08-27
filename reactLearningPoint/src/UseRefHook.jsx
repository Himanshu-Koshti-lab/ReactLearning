import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  const count = useRef(0);
  const refEle = useRef()

  useEffect(() => {
    count.current = count.current + 1
    console.log(count);
  });
  

   return (
    <>
      <input type="text" ref={refEle} placeholder="Type Here" onChange={(e)=> setName(e.target.value)} ></input>
      <p>Number of time render happen : {count.current}</p>
    </>
  );
}
