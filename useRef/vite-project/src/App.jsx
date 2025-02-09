import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useFetch from "./components/useFetch";


function App() {
 
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);

  return (
    <>
     {data &&
        data.map((item) => {
          return (
            
          <p key={item.id}>{item.title}</p>);
        })}
    </>
  )
 
}

export default App;
