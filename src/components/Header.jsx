import React, {useState} from 'react'
import { RiCloseLine } from "@remixicon/react"
import { navItems } from '../constants/data'
import { RiMenuLine } from '@remixicon/react'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => (
        setIsOpen(!isOpen)
    )
    return (
        <header className='w-full py-5'>
            <div className="container flex items-center justify-between border-b border-b-white-95">
                {/* logo */}
                <a href="#">
                    <img src="/images/logo.png" alt="logo" width={170} height={50}/>
                </a>

                {/* Mobile menu */}
                <nav className={`navbar ${isOpen ? "active" : ""}`}>
                    {/* close menu */}
                    <button className='absolute top-8 right-8' onClick={handleClick}>
                        <RiCloseLine size={30} />
                    </button>
                    
                    {/* list */}
                    <ul className='space-y-5 text-center'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href="#" 
                                className='text-lg font-medium hover:text-orange-50 transition-colors'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* login btn */}
                    <button className='primary-btn mt-12 max-w-40 w-full'>
                        Login
                    </button>
                </nav>
                
                {/* menu btn */}
                <button className='lg:hidden' onClick={handleClick}>
                    <RiMenuLine />
                </button>

                <div className='max-lg:hidden flex items-center gap-10'>
                    <ul className='flex gap-10'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href="#" className='hover:text-orange-50 transition-colors font-medium text-lg'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className='max-lg:hidden primary-btn'>Login</button>
                </div>
            </div>
        </header>
    )
}