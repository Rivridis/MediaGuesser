"use client";
import React from "react";

const GuessBar = ({ gcount }) => {
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-8 h-8 mx-2 rounded-lg ${
            index < gcount ? "bg-red-400" : "bg-gray-400"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default GuessBar;