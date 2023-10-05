 
import { useState } from "react";
import Logo from "../ui/Logo";
import {FaUserAlt , FaShoppingCart , FaSearch} from "react-icons/fa"
import Search from "../ui/Search";
import { useRouter } from "next/router";

const Header = () => {
  const [isSearchModal,setIsSearchModal] = useState(false)

  const router = useRouter();
  return (
    <div className={`h-[5.5rem] ${router.asPath === "/" ? "bg-transparent": "bg-secondary"} z-50 relative`}>
        <div className="container mx-auto justify-between text-white items-center h-full flex">
        <div><Logo/></div>
        <nav>
            <ul className="flex gap-x-2">
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Home</a></li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Menu</a></li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">About</a></li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Book Table</a></li>

            </ul>
        </nav>
        <div className="flex gap-x-4 items-center"> 
            <a href="#"><FaUserAlt className="hover:text-primary transition-all"/></a>
            <a href="#"><FaShoppingCart className="hover:text-primary transition-all"/></a>
            <button onClick={()=>setIsSearchModal(true)}>
              <FaSearch className="hover:text-primary transition-all"/></button>
            <a href="#"><button className="btn-primary ">Order Online</button></a>
        </div>
        </div>
        {isSearchModal && (
        <Search setIsSearchModal={setIsSearchModal}/>
        )}
    </div>
  );
};

export default Header