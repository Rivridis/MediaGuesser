export default function Page() {
  return (
  <div className="flex flex-col min-h-screen bg-[#A9ACA9]">
    <div className="bg-[#60495A]">
      <div className="text-white font-bold flex-row text-center text-2xl py-2">Fake Nation Generator</div>
    </div>
    <div className="flex flex-grow flex-col justify-center items-center">
        <div className="w-2/4 h-64 bg-white border-gray-300 text-black">TEST</div>
        <div className="flex justify-center items-center py-12">
        <button className="bg-[#60495A] text-white p-2 ml-2 rounded hover:bg-fuchsia-950">Generate!</button>
        </div>
    </div>
    <footer className="bg-[#60495A] text-white p-3 text-center">
        © 2024 Rivridis
    </footer>
  </div>
  );
}