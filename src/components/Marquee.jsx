import React from 'react'

export const Marquee = ({ children, speed = 40, pauseOnHover = false, className = '' }) => {
    return (
        <div className={`overflow-hidden relative w-full group ${className}`}>
            <div
                className={`flex whitespace-nowrap w-max ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
                style={{ animation: `marquee-scroll ${speed}s linear infinite` }}
            >
                <div className="flex shrink-0">{children}</div>
                <div className="flex shrink-0" aria-hidden="true">{children}</div>
            </div>
            <style>{`
                @keyframes marquee-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    )
}