import React from 'react';
import Link from "next/link";
import {Ibarra_Real_Nova} from "next/dist/compiled/@next/font/dist/google";
import Image from "next/image";
import NavItems from "@/components/ui/NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/public">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt="logo" width={46} height={44}/>
            </div>
        </Link>
        <div className="flex items-center gap-8">
           <NavItems/>
            <p>Sign In</p>
        </div>
    </nav>
  );
};

export default Navbar;
