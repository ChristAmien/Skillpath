import React, { useState } from 'react'
import { Title } from './Title'
import { faqItems } from '../constants/data'
import { RiAddLine, RiSubtractLine } from '@remixicon/react'

export const Faq = () => {
    const [activeId, setActiveId] = useState(1)

    const toggleFaq = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <section className='section' id='faq'>
            <div className="container">
                <Title
                    title="Frequently Asked Questions"
                    text="Find answers to the most common questions about our courses, enrollment process, and learning experience. Can't find what you're looking for? Feel free to reach out to our team."
                />

                {/* faq wrapper */}
                <div className='mt-14 lg:mt-16 space-y-4 max-w-[800px] mx-auto'>
                    {faqItems.map((item) => (
                        <div
                            key={item.id}
                            className='border border-white-95 rounded-md bg-white overflow-hidden'
                        >
                            <button
                                onClick={() => toggleFaq(item.id)}
                                className='w-full flex items-center justify-between gap-4 p-6 text-left'
                            >
                                <h4 className='!text-base lg:!text-lg font-medium'>
                                    {item.title}
                                </h4>
                                <span className='shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-90 text-orange-50'>
                                    {activeId === item.id ? (
                                        <RiSubtractLine size={18} />
                                    ) : (
                                        <RiAddLine size={18} />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                    activeId === item.id
                                        ? 'grid-rows-[1fr] opacity-100'
                                        : 'grid-rows-[0fr] opacity-0'
                                }`}
                            >
                                <div className='overflow-hidden'>
                                    <p className='px-6 pb-6 text-grey-15/70'>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}