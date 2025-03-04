"use client";
import React from "react";

const GuessBar = ({ gcount }) => {
    console.log(gcount);
    return (
        <div className = "flex flex-row">
            {[...Array(gcount)].map((_, index) => (
            <div key={index} className="w-8 h-8 mx-2 bg-red-400 rounded-lg"></div>
          ))}
        </div>
    );
  };
  
  export default GuessBar;
  