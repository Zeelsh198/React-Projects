import axios from "axios";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try{
      const request = await fetch("https://jsonplaceholder.typicode.com/posts")
      const response = await request.json();
      setData(response);
      console.log(response);
    }catch(error){
      console.log("eroor occured");
    }
    // try {
    //   const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    //   setData(data); // Update state with the fetched data
    //   console.log(data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };
  

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
    
  }, []);
  

  return (
    <>
      {/* {data.map((ele) => (
        <h1 key={ele.id}>{ele.title}</h1>
      ))} */}
    </>
  );
};

export default HomePage;
