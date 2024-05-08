import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { PiChartLineDownBold } from "react-icons/pi";
import { LuCheckCircle2 } from "react-icons/lu";



function Buttons() {
    return (
<div className="flex flex-wrap justify-center gap-2 mt-4">
  <button className="flex bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition-colors duration-300 text-sm">
  <BsFillBookmarkHeartFill className="h-5 w-5"/>
    Tüm Favoriler
  </button>
  <button className="flex bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm">
  <LuCheckCircle2 className="h-5 w-5"/>
    Stoktakiler
  </button>
  <button className="flex bg-white text-red-500 border border-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-colors duration-300 text-sm">
  <PiChartLineDownBold className="h-5 w-5"/>
    Fiyatı Düşenler
  </button>
</div>

    )
}

export default Buttons;