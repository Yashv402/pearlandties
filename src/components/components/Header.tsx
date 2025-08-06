import Link from "next/link";
import React from "react";

const Header = () => {
 return (
  <div>
   <header className="">
    {/* Icon */}
    <div className="w-10 h-10 rounded-full border">
     <img src="src/app/favicon.ico" alt="Logo" />
    </div>
    <nav>
     <ul className="flex space-x-4">
      <li>
       <Link href="/" className="hover:underline">
        Home
       </Link>
      </li>
      <li>
       <Link href="/about" className="hover:underline">
        About
       </Link>
      </li>
      <li>
       <Link href="/contact" className="hover:underline">
        Contact
       </Link>
      </li>
     </ul>
    </nav>
    <span>profile</span>
   </header>
  </div>
 );
};

export default Header;
