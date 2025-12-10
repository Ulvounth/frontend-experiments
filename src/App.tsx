import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center m-20 header">
        Welcome to Frontend Experiments!
      </h1>
      <p className="text-center text-lg m-4 text-gray-700 italic andreas">
        My name is Andreas, and I am a Junior Fullstack Developer passionate
        about
        <span className="text-purple-600 font-bold dynamic-word"></span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="flex items-center justify-center">
          <div className="bg-blue-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-blue-600 active:animate-spin">
            Container 1
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-green-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-600 active:animate-spin">
            Container 2
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-red-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-red-600 active:animate-spin">
            Container 3
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-yellow-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-600 active:animate-spin">
            Container 4
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
