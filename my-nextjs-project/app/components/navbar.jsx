import Link from 'next/link';
import { FaHeart } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

function Navbar () {
    return (
        <div className="bg-white px-4 py-4 shadow-md">
          <div className="flex justify-between items-center">
              {/* Sol Taraftaki Linkler */}
              <div className='flex'>
                <div>
                  <Link href={"/"} >
                    <div className='flex items-center gap-1 hover:text-orange-500'>
                      <FaHeart/>
                      <p className="text-gray-500 hover:text-orange-500 font-bold text-lg">Favorilerim</p>
                    </div>
                  </Link>
                </div>
                <div className='flex ml-4'>
                  <Link href={"/collection"} >
                    <div className='flex items-center gap-1 hover:text-orange-500'>
                  <MdCollectionsBookmark />
                      <p className="text-gray-500 hover:text-orange-500 font-bold text-lg">Koleksiyonlarım</p>
                      </div>
                  </Link>
                  </div>
              </div>

              {/* Sağ Taraftaki Arama Kutusu */}
              <div className="flex items-center">
                  <input type="text" placeholder="Favorilerimde ara" className="border border-gray-300 rounded-lg px-4 py-2 mr-4" />
                  <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500">Ara</button>
              </div>
          </div>
        </div>
    )
}

export default Navbar;