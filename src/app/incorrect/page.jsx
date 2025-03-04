"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function Correct() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const correct = searchParams.get("correct") || "No guess provided";


  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#2D336B] text-white text-2xl">
      Better luck next time! The show is {correct}
      <button type="button" onClick={() => router.back()} className="bg-[#A9B5DF] hover:bg-[#7886C7] text-white py-1 px-4 my-4 rounded-lg">
          Next
        </button>
    </div>
  );
}