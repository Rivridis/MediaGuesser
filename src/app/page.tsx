"use client";
import RandomImage from "./components/randomimage.jsx";
import GuessBar from "./components/guessbar.jsx";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [screen, setScreen] = useState(null);
  const [gcount, setGcount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const animvalue = Math.floor(Math.random() * 2);
    fetch("media.json")
      .then((response) => response.json())
      .then((data) => {
        setScreen(data[animvalue]); 
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  function skipTurn() { // @ts-ignore
    router.push(`/incorrect?correct=${encodeURIComponent(screen.name)}`);
  }


  function handleClick() {
    
    if (screen != null)
      {
        var guesses = document.getElementById("guesses") // @ts-ignore
        var guessValue = guesses.value; // @ts-ignore
        var correct = screen.name;
        console.log(correct);
        if (guessValue
          .toLowerCase() === correct.toLowerCase())
          {
            router.push(`/correct?guess=${encodeURIComponent(guessValue)}`);
          }
        else
        {
          if (gcount < 4)
          setGcount(gcount + 1);
          else
          {
            router.push(`/incorrect?correct=${encodeURIComponent(correct)}`);
          }
        }
}
 
  
  }
  return (
    <div className="h-screen flex flex-col bg-[#2D336B] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-[55px] text-[#A9B5DF]">MediaGuesser</h1>
        
        <div className="w-1/2 h-96 bg-gray-300 rounded-xl flex items-center justify-center mb-6">
          <RandomImage screen={screen}/>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center my-8">
        <input
          id="guesses" 
          type="text" 
          placeholder="Enter Your Guess" 
          className="w-64 p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFF2F2] text-[#2D336B]"
        />
        <button onClick={handleClick} className="bg-[#A9B5DF] hover:bg-[#7886C7] text-white font-bold py-2 px-4 mx-4 rounded-lg">
          Guess!
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <GuessBar gcount={gcount}/>
        <button onClick={skipTurn} className="bg-[#A9B5DF] hover:bg-[#7886C7] text-white font-bold py-2 px-4 rounded-lg mx-4">
          Skip
        </button>
      </div>
    </div>
  );
}


