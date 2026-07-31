import React, { useEffect, useState, useRef } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { RiCheckLine } from '@remixicon/react'
import { aboutStats, aboutGoals } from '../constants/data'
import { subNavItems } from '../constants/data'

export const About = () => {
    const [activeSection, setActiveSection] = useState('company')
    const sectionRefs = useRef({})

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-30% 0px -60% 0px' }
        )

        subNavItems.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Header />

            {/* hero image */}
            <section>
                <div className="container">
                    <figure className='relative rounded-xl overflow-hidden h-[280px] lg:h-[400px] mt-6'>
                        <img
                            src="/images/AboutUs.jpg"
                            alt="About us"
                            width={800}
                            height={400}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 bg-black/40 flex items-end p-8 lg:p-12'>
                            <h1 className='text-white text-3xl lg:text-5xl'>About Us</h1>
                        </div>
                    </figure>
                </div>
            </section>

            <section className='section'>
                <div className="container">
                    <div className='grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16'>
                        {/* sticky sub-nav */}
                        <aside className='lg:sticky lg:top-8 lg:self-start'>
                            <nav className='flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0'>
                                {subNavItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`whitespace-nowrap text-left px-4 py-3 rounded-md font-medium transition-colors ${
                                            activeSection === item.id
                                                ? 'bg-orange-90 text-orange-50'
                                                : 'text-grey-15/60 hover:bg-white-95'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </aside>

                        {/* content */}
                        <div className='space-y-16'>
                            {/* Company */}
                            <div id='company' className='scroll-mt-24'>
                                <h4>Company</h4>
                                <p className='mt-4 text-grey-15/80'>
                                    We're a team of educators and industry professionals on a mission to make quality design and development education accessible to everyone, everywhere. Founded with a simple belief — that practical skills open doors — we've grown into a platform trusted by thousands of learners worldwide.
                                </p>
                            </div>

                            {/* Achievements */}
                            <div id='achievements' className='scroll-mt-24'>
                                <h4>Achievements</h4>
                                <div className='grid grid-cols-3 gap-4 mt-6'>
                                    {aboutStats.map((stat) => (
                                        <div key={stat.id} className='bg-white border border-white-95 rounded-xl p-4 lg:p-6 text-center'>
                                            <p className='text-2xl lg:text-3xl font-semibold text-orange-50'>
                                                {stat.value}
                                            </p>
                                            <p className='text-sm mt-1 text-grey-15/70'>
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Our Goals */}
                            <div id='goals' className='scroll-mt-24'>
                                <h4>Our Goals</h4>
                                <ul className='mt-6 space-y-4'>
                                    {aboutGoals.map((goal, index) => (
                                        <li key={index} className='flex items-start gap-2.5'>
                                            <span className='shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-90 text-orange-50 mt-0.5'>
                                                <RiCheckLine size={14} />
                                            </span>
                                            <span className='text-grey-15/80'>{goal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}