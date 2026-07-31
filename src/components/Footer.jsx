import React from 'react'
import { socialIcons } from '../constants/data'
import { SocialLink } from './SocialLink'
import { FooterList } from './FooterList'

export const Footer = () => {
    return (
        <footer className='bg-grey-15 text-white mt-20 lg:mt-32' id='contact'>
            <div className='container py-16 lg:py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>
                    {/* brand + contact */}
                    <div className='lg:col-span-2'>
                        <h4 className='!text-2xl font-semibold text-white'>
                            SkillBridge
                        </h4>
                        <p className='mt-4 text-white/60 max-w-[320px]'>
                            Empowering learners with practical skills and real-world knowledge through flexible, expert-led online courses.
                        </p>

                        <SocialLink />

                        {/* social icons */}
                        <div className='flex items-center gap-3 mt-6'>
                            {socialIcons.map((social) => (
                                
                                <a
                                    key={social.id}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-50 transition-colors'
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* footer link lists */}
                    <FooterList />
                </div>

                {/* bottom bar */}
                <div className='mt-12 lg:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <p className='text-white/50 text-sm'>
                        © {new Date().getFullYear()} SkillBridge. All rights reserved.
                    </p>
                    <div className='flex items-center gap-6'>
                        <a href='#' className='text-white/50 hover:text-orange-50 text-sm transition-colors'>
                            Privacy Policy
                        </a>
                        <a href='#' className='text-white/50 hover:text-orange-50 text-sm transition-colors'>
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}