

function Buttons() {
    return (
        <div className="flex justify-left space-x-2 mt-4 ">
               <button className="bg-white text-orange-500 border border-white-800 px-4 py-2 rounded-lg font-bold hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 ml-2">
                 Tüm Favoriler
               </button>
             <button className="bg-white text-blue-500 border border-white-800 px-4 py-2 rounded-lg font-bold hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
               Avantajlı Ürünler
               </button>
             <button className="bg-white text-red-500 border border-white-800 px-4 py-2 rounded-lg font-bold hover:border-red-500 hover:text-red-500 transition-colors duration-300">
               Fiyatı Düşenler
               </button>
             <button className="bg-white text-yellow-500 border border-white-800 px-4 py-2 rounded-lg font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors duraiton-300">
               Kuponlu Ürünler
               </button>
         </div>
    )
}

export default Buttons;