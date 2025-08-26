import React, { useEffect, useState } from 'react'

export default function UseApiEffect() {

  const [rest, setRest] = useState([]);

  const [count , setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  useEffect(()=> {
    fetch("https://fakestoreapi.com/products") //API CALL
    .then(res => res.json()) //Raw Response into JSON
    .then(data => setRest(data)); //JSON to Rest Object
  },[count])

  return (
    <>
    <div>API Call Done {count} times</div>
    <div>{rest.length} number of Data found through api.</div>
    <button onClick={handleClick}> Get Data From URL</button>
    </>
  )
}
