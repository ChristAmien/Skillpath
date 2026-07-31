import { Title } from "./Title"
import { benefitItems } from "../constants/data"
import { RiArrowRightUpLine } from "@remixicon/react"

export const Benefits = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title 
                    title='Benefits' 
                    text='Gain practical skills through high-quality online courses designed by industry professionals. Learn at your own pace, access engaging learning resources anytime, and build the confidence you need to achieve your academic and career goals.' 
                    link='View All' 
                />
                {/* Card wrapper  */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
                    {benefitItems.map((items) => (
                        // card
                        <div className="bg-white p-10 flex flex-col rounded-xl">
                            {/* icon */}
                            <div className="bg-orange-75 w-[55%] h-24 flex items-center justify-center mx-auto rounded-xl mb-8">
                                <img 
                                    src={items.icon} 
                                    alt={items.title}
                                    width={64}
                                    height={64}
                                />
                            </div>

                            <div className="mb-4 text-center space-y-3.5">
                                <h4>{items.title}</h4>
                                <p>{items.text}</p>
                            </div>

                            {/* button */}
                            <button className="mt-auto ml-auto border border-white-95 w-14 h-14 flex items-center justify-center rounded-md text-orange-50 transition-colors hover:bg-orange-50 hover:text-white">
                                <RiArrowRightUpLine size={28}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
