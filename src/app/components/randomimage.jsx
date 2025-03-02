"use client";
import { useState, useEffect } from 'react'

const RandomImage = () => {
    const [Screen, setScreen] = useState(null);
    const animvalue = Math.floor(Math.random() * 2);
    useEffect(() => {
      fetch("media.json")
        .then((response) => response.json())
        .then((data) => {
          setScreen(data[animvalue]); 
        })
        .catch((error) => console.error("Error loading data:", error));
    }, []);
  
    if (!Screen) return <p>Loading...</p>; // Handle loading state

const randomValue = Math.floor(Math.random() * 5);
console.log(randomValue);
const firstImageUrl = Screen.screenshots[randomValue];
  
    return (
      <div>
        <img src={firstImageUrl} className="rounded-lg bg-cover bg-center"/>
      </div>
    );
  };
  
  export default RandomImage;
