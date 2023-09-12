import { GithubIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Github() {
    return (
        <div>
            <Link href={"https://github.com/MuhammadbinSalman/crypto-currency-converter/"} target='_blank'>
                <div className='top-[75vh] inset-x-0 absolute bottom-0 justify-center gap-1 mx-auto right-auto flex items-center'>
                    <div className=" flex justify-between text-lg items-center gap-4 hover:ml-0 ml-[-180px] transition-margin duration-300 text-white bg-[#672e95] py-2 px-5 rounded-r-xl">
                        <p className='text-sm'>code by:<br /> Muhammad Bin Salman</p><GithubIcon />
                    </div>
                </div>
            </Link>
        </div>
    )
}
