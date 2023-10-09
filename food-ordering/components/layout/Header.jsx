 
import { useState } from "react";
import Logo from "../ui/Logo";
import {FaUserAlt , FaShoppingCart , FaSearch} from "react-icons/fa"
import Search from "../ui/Search";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal,setIsSearchModal] = useState(false)

  const router = useRouter();
  return (
    <div className={`h-[5.5rem] ${router.asPath === "/" ? "bg-transparent": "bg-secondary"} z-50 relative`}>
        <div className="container mx-auto justify-between text-white items-center h-full flex">
        <div><Logo/></div>
        <nav>
            <ul className="flex gap-x-2">
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><Link href="/home">Home</Link></li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><Link href="/menu">Menu</Link></li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><Link href="/about">About</Link></li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><Link href="/reservation">Book Table</Link></li>

            </ul>
        </nav>
        <div className="flex gap-x-4 items-center"> 
            <Link href="/auth/login"><FaUserAlt className="hover:text-primary transition-all"/></Link>
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