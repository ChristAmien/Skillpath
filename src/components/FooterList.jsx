import React from 'react'
import { footerLists } from '../constants/data'

export const FooterList = () => {
    return (
        <>
            {footerLists.map((list) => (
                <div key={list.id}>
                    <h4 className='!text-lg font-medium text-white'>
                        {list.title}
                    </h4>
                    <ul className='mt-5 space-y-3'>
                        {list.links.map((link, index) => (
                            <li key={index}>
                                
                                <a href=""  href={link.href || '#'}
                                    className='text-white/60 hover:text-orange-50 transition-colors text-sm md:text-base'
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}