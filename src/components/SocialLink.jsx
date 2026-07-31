import React from 'react'
import { contactInfo } from '../constants/data'

export const SocialLink = () => {
    return (
        <div className='mt-6 space-y-3'>
            {contactInfo.map((info) => (
                <div
                    key={info.id}
                    className='flex items-center gap-3 text-white/70'
                >
                    <span className='w-9 h-9 flex items-center justify-center rounded-full bg-white/10 shrink-0'>
                        <info.icon size={18} />
                    </span>
                    <p className='text-sm md:text-base'>{info.label}</p>
                </div>
            ))}
        </div>
    )
}