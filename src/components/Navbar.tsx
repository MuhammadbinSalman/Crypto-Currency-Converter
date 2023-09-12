"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, User2 } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        // Add your logic to determine when to show the navbar
        // For example, you can use scroll events or a state change.

        // For demonstration purposes, we'll just show the navbar after a delay.
        setTimeout(() => {
            setShowNavbar(true);
        }, 1000); // Adjust the delay as needed
    }, []);
    return (
        <>
            <nav className={`w-full bg-gradient-to-r from-[#47509b] to-[#414fba] md:px-9 xl:px-1 transform translate-y-[-100%] transition-transform duration-500 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
                <div className='flex w-full mx-auto bg-slate-100 max-h-24 pl-1 pr-2 max-w-7xl justify-between md:rounded-b-2xl items-center'>
                    <Link href={"/"}>
                        <div className='flex justify-center items-center  gap-5 sm:gap-11'>
                            <div className='flex justify-center items-center'>
                                <Image src={"/navLogo.png"} height={100} width={100} alt='LOGO' />
                                <h1 className='text-[20px] text-gray-800 font-semibold leading-tight'>Crypto<span className='text-[#f8c632]'>-</span>Converter</h1>
                            </div>
                            <div className='hidden sm:block'>
                                <div className='flex gap-3'>
                                    <Link href="/" className='inline-block border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>Home</Link>
                                    <Link href="/" className='inline-block border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>Contact Us</Link>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <div className='block sm:hidden mt-1'>
                        <Sheet>
                            <SheetTrigger><Menu /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle><Image alt="logo" className='py-2 ml-3' width={"140"} height={"140"} src={"/navLogo.png"} /></SheetTitle>
                                    <SheetDescription>
                                        <div className='flex flex-col gap-1'>
                                            <Link href="/" className='inline-block sm:text-slate-500 md:text-red-600 lg:text-amber-500 xl:text-cyan-600   border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>Home</Link>
                                            <Link href="/" className='inline-block border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>Contact Us</Link>
                                            <Link href="/" className='inline-block border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>Blog</Link>
                                            <Link href="/" className='inline-block border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>FAQ</Link>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className='hidden sm:block'>
                        <div className='flex justify-center items-center gap-4 sm:gap-6'>
                            <div className='flex gap-2 sm:gap-4'>
                                <Link href="/" className='inline-block border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>Blog</Link>
                                <Link href="/" className='inline-block border-b-2 text-gray-700 border-transparent hover:border-[#47509b] transition duration-300'>FAQ</Link>
                            </div>
                            <Link href={"/Profile"}>
                                <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-300'>
                                    <User2 className='' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}
