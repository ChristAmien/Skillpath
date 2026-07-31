import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import { navItems } from '../constants/data'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => setIsOpen(!isOpen)

    const handleNavClick = (e, href) => {
        handleClick()

        if (href.includes('#')) {
            e.preventDefault()
            const hash = href.split('#')[1]

            if (location.pathname !== '/') {
                // On n'est pas sur l'accueil → on y va d'abord, puis on scroll
                navigate('/')
                setTimeout(() => {
                    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            } else {
                // Déjà sur l'accueil → scroll direct
                document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    const renderLink = (item, className) => {
        const isRoute = !item.href.includes('#')
        return isRoute ? (
            <Link to={item.href} onClick={handleClick} className={className}>
                {item.label}
            </Link>
        ) : (
            
            <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={className}
            >
                {item.label}
            </a>
        )
    }

    return (
        <header className='w-full py-5'>
            <div className="container flex items-center justify-between border-b border-b-white-95">
                <Link to="/">
                    <img src="/images/logo.png" alt="logo" width={170} height={50} />
                </Link>

                <nav className={`navbar ${isOpen ? "active" : ""}`}>
                    <button className='absolute top-8 right-8' onClick={handleClick}>
                        <RiCloseLine size={30} />
                    </button>

                    <ul className='space-y-5 text-center'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                {renderLink(item, 'text-lg font-medium hover:text-orange-50 transition-colors')}
                            </li>
                        ))}
                    </ul>

                    <button className='primary-btn mt-12 max-w-40 w-full'>
                        Login
                    </button>
                </nav>

                <button className='lg:hidden' onClick={handleClick}>
                    <RiMenuLine />
                </button>

                <div className='max-lg:hidden flex items-center gap-10'>
                    <ul className='flex gap-10'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                {renderLink(item, 'hover:text-orange-50 transition-colors font-medium text-lg')}
                            </li>
                        ))}
                    </ul>

                    <button className='max-lg:hidden primary-btn'>Login</button>
                </div>
            </div>
        </header>
    )
}