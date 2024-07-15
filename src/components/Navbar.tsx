'use client';
import React, { useState } from 'react';
import logo from '@/assests/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, UserRound } from 'lucide-react'; 
import SearchBar from './SearchBar';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
 
  return (
    <nav className="w-full h-auto px-4 py-4 md:px-10 md:py-7 bg-white">
      <div className="flex flex-col md:flex-row md:justify-between items-center">

        
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 md:justify-start mb-4 md:mb-0">
          <div className=""> <Link href="/Home" className="flex-shrink-0"> 
            <Image src={logo} alt="logo" width={150} height={150} />
          </Link></div>
         
          <div className="mt-2 md:mt-0 md:ml-4">
            <Link href='/'>
              <Button className='w-[150px] bg-black text-base hover:bg-gray-600'>Design</Button>
            </Link>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 hover:text-gray-900 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
        <div className="flex flex-row justify-between gap-[100px]">
        <div className="hidden px-8 w-[650px] md:block pt-2 md:pt-0">
          <SearchBar />
        </div>
        <ul className={`hidden md:flex flex-row space-x-9 md:ml-auto items-center text-xl font-normal ${mobileMenuOpen ? 'hidden' : ''}`}> 
          <li className='   hover:underline'><Link href="/About">About</Link></li> 
          <li className=' hover:underline'><Link href="/About">Contact</Link></li> 
          <li className=' hover:underline'><Link href="/Blog">Blog</Link></li>
        <li className='hover:border hover:rounded hover:border-slate-500 flex flex-row gap-2'><UserRound/><Link href='/'>Sign Out</Link></li>
         <li className=' hover:underline flex flex-row gap-2'><UserRound/><Link href='/'>Sign up</Link></li>
          
         
        </ul>
        </div>

        {/* Search Bar (Desktop) */}
       

        {/* Navigation Links (Desktop) */}
        
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4">
          {/* Search Bar (Mobile) */}
          <SearchBar />
          <ul className="flex flex-col space-y-2 mt-4 ">
            <li className=' hover:border hover:rounded hover:border-slate-500'><Link href="/About">About</Link></li> 
            <li className='hover:border hover:rounded hover:border-slate-500'><Link href="/About">Contact</Link></li> 
            <li className='hover:border hover:rounded hover:border-slate-500'><Link href="/Blog">Blog</Link></li>
            <li className='hover:border hover:rounded hover:border-slate-500 flex flex-row gap-2'><UserRound/><Link href='/'>Sign up</Link></li>
            <li className='hover:border hover:rounded hover:border-slate-500 flex flex-row gap-2'><UserRound/><Link href='/'>Sign in</Link></li>
            </ul>
        </div>
      )}
    </nav>
  );
}
