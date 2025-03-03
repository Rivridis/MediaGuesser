"use client";
import { useState, useEffect } from 'react'

const RandomImage = () => {
    const [Image, setImage] = useState(null);
    const animvalue = Math.floor(Math.random() * 2);
    useEffect(() => {
      fetch("media.json")
        .then((response) => response.json())
        .then((data) => {
          setImage(data[animvalue]); 
        })
        .catch((error) => console.error("Error loading data:", error));
    }, []);
  
    if (!Image) return <p>Loading...</p>;

const randomValue = Math.floor(Math.random() * 5);
console.log(randomValue);
const firstImageUrl = Image.screenshots[randomValue];
  
    return (
      <div>
        <img src={firstImageUrl} className="rounded-lg bg-cover bg-center"/>
      </div>
    );
  };

export default RandomImage;
