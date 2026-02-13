import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Less is more for an elegant background
        const newHearts = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: Math.random() * 15 + 15, // Very slow float (15-30s)
            delay: Math.random() * 10,
            size: Math.random() * 1.5 + 0.5, // 0.5 to 2rem
            rotation: Math.random() * 20 - 10, // Subtle initial tilt
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute text-softBlush/60 select-none opacity-40 blur-sm"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}rem`,
                        animation: `floatElegant ${heart.duration}s linear infinite`,
                        animationDelay: `${heart.delay}s`,
                        bottom: '-10%',
                        transform: `rotate(${heart.rotation}deg)`,
                    }}
                >
                    ❤️
                </div>
            ))}
            <style>{`
        @keyframes floatElegant {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: translateY(-120vh) rotate(45deg); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default FloatingHearts;
