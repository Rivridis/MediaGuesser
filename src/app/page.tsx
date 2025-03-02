export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-[#2D336B] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-[55px] text-[#A9B5DF]">MediaGuesser</h1>
        
        <div className="w-1/2 h-96 bg-gray-300 rounded-xl flex items-center justify-center mb-6">
          <img 
            src='' 
            alt="Display" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center my-8">
        <input 
          type="text" 
          placeholder="Enter Your Guess" 
          className="w-64 p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFF2F2] text-[#2D336B]"
        />
        <button className="bg-[#A9B5DF] hover:bg-[#7886C7] text-white font-bold py-2 px-4 mx-4 rounded-lg">
          Guess!
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
      {[...Array(5)].map((_, index) => (
          <div key={index} className="w-8 h-8 mx-2 bg-gray-400 rounded-lg"></div>
        ))}
        <button className="bg-[#A9B5DF] hover:bg-[#7886C7] text-white font-bold py-2 px-4 rounded-lg mx-4">
          Skip
        </button>
      </div>
    </div>
  );
}