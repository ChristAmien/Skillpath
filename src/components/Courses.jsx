import { Title } from "./Title"
import { coursesSecItems } from "../constants/data"
export const Courses = () => {
    return (
        <section className="section">
            <div className="container">
                <Title 
                    title="Our Courses"
                    text="Explore a diverse selection of expertly designed courses that help you develop practical, in-demand skills. From web development and UI/UX design to programming, digital marketing, and data science, each course combines engaging lessons, real-world projects, and expert guidance to ensure you learn with confidence and achieve your goals."
                    link="View All"
                />

                {/* card wrapper */}
                <div className="grid gap-5 lg:grid-cols-3 mt-8 lg:mt-16">
                    {coursesSecItems.map((items) => (
                        // card
                        <div className="bg-white p-7 lg:p-10 rounded-[10px]" key={items.id}>
                            {/* img */}
                            <div className="">
                                <img 
                                    src={items.img} 
                                    alt={items.title} 
                                    width={560}
                                    height={266}
                                    className="w-full h-full object-cover rounded-[10px]"
                                />
                            </div>

                            {/* content */}
                            <div className="mt-6 ">
                                {/* tags */}
                                <div className="flex items-center flex-wrap gap-2.5">
                                    {items.tags.map((tags, index )=> (
                                        <span 
                                            className="border border-orange-75 p-2
                                            rounded-md bg-orange-97 mr-2" 
                                            key={index}
                                        >
                                            {tags.tag}
                                        </span>
                                    ))}
                                    <p className="ml-auto font-medium">{items.instructor}</p>
                                </div>
                                {/* Meta data */}
                                <div className="mt-6 space-y-1.5">
                                    <p>{items.text}</p>
                                </div>
                            </div>

                            {/* btn */}
                            <button className="bg-white-97 w-full p-3.5
                            rounded-md border border-white-97 hover:text-orange-50 hover:border-orange-50 transition"
                            >
                                Get it now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
