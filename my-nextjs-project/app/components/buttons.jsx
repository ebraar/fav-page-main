

function Buttons() {
    return (
<div className="flex flex-wrap justify-center gap-2 mt-4">
  <button className="bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition-colors duration-300 text-sm">
    Tüm Favoriler
  </button>
  <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm">
    Avantajlı Ürünler
  </button>
  <button className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-colors duration-300 text-sm">
    Fiyatı Düşenler
  </button>
  <button className="bg-white text-yellow-500 border border-yellow-500 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 hover:text-white transition-colors duration-300 text-sm">
    Kuponlu Ürünler
  </button>
</div>

    )
}

export default Buttons;