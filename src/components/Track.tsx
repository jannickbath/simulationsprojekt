import React, { useRef, useEffect, useState, ReactNode } from 'react';

const Track: React.FC<{children: ReactNode}> = ({ children }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [stripeAmount, setStripeAmount] = useState(1);

    useEffect(() => {
        if (trackRef.current) {
            const trackWidth = trackRef.current.offsetWidth;
            const calculatedStripeAmount = Math.floor(trackWidth / 200);
            setStripeAmount(calculatedStripeAmount);
        }
    }, []);

    return (
        <div className="track" ref={trackRef}>
            <div className="top"></div>
            <div className="lines">
                {[...Array(stripeAmount)].map(() => (
                    <div className="stripe"></div>
                ))}
            </div>
            <div className="bottom"></div>
            {children}
        </div>
    );
};

export default Track;
