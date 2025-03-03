"use client";
import { useSearchParams } from "next/navigation";

export default function Correct() {
  const searchParams = useSearchParams();
  const guess = searchParams.get("guess") || "No guess provided";

  return (
    <div className="h-screen flex items-center justify-center bg-[#2D336B] text-white text-2xl">
      Correct! The show is {guess}
    </div>
  );
}