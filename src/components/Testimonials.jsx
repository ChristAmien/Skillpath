import React, { useState } from 'react'
import { Title } from './Title'
import { testimonialsItems } from '../constants/data'
import { RiArrowLeftLine } from '@remixicon/react'
import { RiArrowRightLine } from '@remixicon/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export const Testimonials = () => {
    const [prevEl, setPrevEl] = useState(null)
    const [nextEl, setNextEl] = useState(null)

    return (
        <section className='section'>
            <div className="container">
                <Title
                    title="Our Testimonials"
                    text="Hear from learners who have transformed their skills and achieved their goals through our platform. From gaining new career opportunities to mastering practical knowledge, their success stories reflect our commitment to delivering a high-quality, engaging, and rewarding learning experience."
                    link="View All"
                />

                {/* card wrapper */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 1.5
                        },
                        1280: {
                            slidesPerView: 2.5
                        }
                    }}
                    className='mt-14 lg:mt-16'>
                    {testimonialsItems.map((items) => (
                        // card
                        <SwiperSlide key={items.id} className='bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3'>
                            <p>{items.text}</p>
                            <div className='flex items-center justify-between flex-wrap pt-4 border-t border-orange-90 gap-4'>
                                <div className='flex items-center gap-3'>
                                    {/* img */}
                                    <div>
                                        <img
                                            src={items.img}
                                            alt={items.author}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                </div>
                                {/* author */}
                                <p className='font-medium'>{items.author}</p>
                            </div>
                            <button className='secondary-btn'>Read Full Story</button>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* navigation btn */}
                <div className='flex items-center gap-4 justify-center mt-8'>
                    <button
                        ref={(node) => setPrevEl(node)}
                        className='bg-orange-70 w-12 h-12 fles items-center justify-center rounded-xl hover:bg-orange-75 transition active:bg-orange-75/80'
                    >
                        <RiArrowLeftLine size={30} />
                    </button>
                    <button
                        ref={(node) => setNextEl(node)}
                        className='bg-orange-70 w-12 h-12 fles items-center justify-center rounded-xl hover:bg-orange-75 transition active:bg-orange-75/80'                    >
                        <RiArrowRightLine size={30} />
                    </button>
                </div>
            </div>
        </section>
    )
}