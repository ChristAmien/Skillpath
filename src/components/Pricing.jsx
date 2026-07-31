import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

const pricingPlans = [
    {
        id: 1,
        name: 'Basic',
        price: '9.99',
        period: '/month',
        features: [
            'Access to 5 courses',
            'Community support',
            'Certificate of completion',
            'Mobile access',
        ],
        highlighted: false,
    },
    {
        id: 2,
        name: 'Pro',
        price: '19.99',
        period: '/month',
        features: [
            'Access to all courses',
            'Priority support',
            'Certificate of completion',
            'Mobile & offline access',
            '1-on-1 mentoring session',
        ],
        highlighted: true,
    },
    {
        id: 3,
        name: 'Enterprise',
        price: '49.99',
        period: '/month',
        features: [
            'Access to all courses',
            'Dedicated support',
            'Team management dashboard',
            'Custom learning paths',
            'Unlimited mentoring sessions',
        ],
        highlighted: false,
    },
]

export const Pricing = () => {
    return (
        <>
            <Header />
            <section className='section'>
                <div className='container'>
                    <div className='text-center max-w-[600px] mx-auto'>
                        <h2>Choose Your Plan</h2>
                        <p className='mt-4'>
                            Flexible pricing options designed to fit your learning goals, whether you're just getting started or ready to go all in.
                        </p>
                    </div>

                    {/* pricing cards */}
                    <div className='grid gap-6 md:grid-cols-3 mt-12 lg:mt-16 items-start'>
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`p-8 lg:p-10 rounded-xl border ${
                                    plan.highlighted
                                        ? 'bg-grey-15 text-white border-grey-15 lg:scale-105'
                                        : 'bg-white border-white-95'
                                }`}
                            >
                                <h4 className={plan.highlighted ? '!text-white' : ''}>
                                    {plan.name}
                                </h4>

                                <div className='mt-4 flex items-end gap-1'>
                                    <span className='text-4xl font-semibold'>
                                        ${plan.price}
                                    </span>
                                    <span className={plan.highlighted ? 'text-white/60' : 'text-grey-15/60'}>
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className='mt-8 space-y-4'>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className='flex items-start gap-2.5'>
                                            <span className={`mt-1 shrink-0 w-1.5 h-1.5 rounded-full ${
                                                plan.highlighted ? 'bg-orange-50' : 'bg-orange-50'
                                            }`} />
                                            <span className={plan.highlighted ? 'text-white/80' : 'text-grey-15/80'}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full mt-10 ${
                                        plan.highlighted ? 'primary-btn' : 'secondary-btn'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}