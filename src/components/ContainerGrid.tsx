export default function ContainerGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="flex items-center justify-center">
        <div
          onClick={() => console.log("Du trykket på Container 1 - Blå boks!")}
          className="bg-blue-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-blue-600 active:animate-spin cursor-pointer"
        >
          Container 1
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          onClick={() => console.log("Du trykket på Container 2 - Grønn boks!")}
          className="bg-green-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-600 active:animate-spin cursor-pointer"
        >
          Container 2
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          onClick={() => console.log("Du trykket på Container 3 - Rød boks!")}
          className="bg-red-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-red-600 active:animate-spin cursor-pointer"
        >
          Container 3
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          onClick={() => console.log("Du trykket på Container 4 - Gul boks!")}
          className="bg-yellow-500 text-white w-42 h-42 rounded shadow flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-600 active:animate-spin cursor-pointer"
        >
          Container 4
        </div>
      </div>
    </div>
  );
}
