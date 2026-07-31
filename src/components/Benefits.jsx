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
                    text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.' 
                    link='View All' 
                />
                {/* Card wrapper  */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
                    {benefitItems.map((items) => (
                        // card
                        <div className="bg-white p-10 flex flex-col rounded-xl">
                            {/* icon */}
                            <div className="">
                                <img 
                                    src={items.icon} 
                                    alt={items.title}
                                    width={64}
                                    height={64}
                                />
                            </div>

                            <div>
                                <h4>{items.title}</h4>
                                <p>{items.text}</p>
                            </div>

                            {/* button */}
                            <button>
                                <RiArrowRightUpLine size={28}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
