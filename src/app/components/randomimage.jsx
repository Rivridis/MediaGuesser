"use client";
import React from "react";

const RandomImage = ({ screen }) => {
  if (!screen) return <p>Loading...</p>;

  const randomValue = Math.floor(Math.random() * 5);
  console.log(randomValue);
  const firstImageUrl = screen.screenshots[randomValue];

  return (
    <div>
      <img src={firstImageUrl} className="rounded-lg bg-cover bg-center" />
    </div>
  );
};

export default RandomImage;
