import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ButtonsSection = ({ onYes }) => {
    // When noBtnState is null, it's relative.
    // When not null, it becomes fixed and moves.
    const [noBtnState, setNoBtnState] = useState(null);

    const moveNoButton = (e) => {
        e.preventDefault();
        const maxX = window.innerWidth - 180; // button width approx
        const maxY = window.innerHeight - 80; // button height approx

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        setNoBtnState({ x, y });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 m-10 w-full z-20 px-4 relative pointer-events-none">
            {/* YES Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onYes}
                className="pointer-events-auto px-12 py-4 bg-gradient-to-r from-rose-400 to-rose-600 text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-elegant tracking-wide border-2 border-rose-300 flex items-center justify-center gap-2 z-30 min-w-[200px]"
            >
                Yes Forever 💖
            </motion.button>

            {/* NO Button Wrapper to prevent layout shift */}
            <div className="relative h-14 w-40">
                <motion.button
                    initial={false}
                    animate={noBtnState ? { x: noBtnState.x, y: noBtnState.y } : { x: 0, y: 0 }}
                    transition={{ duration: 0.1, ease: "linear" }} // Fast instant movement
                    onMouseEnter={moveNoButton}
                    onTouchStart={moveNoButton}
                    className={`pointer-events-auto px-10 py-4 bg-white text-gray-400 font-body font-medium text-sm uppercase tracking-widest rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-not-allowed whitespace-nowrap min-w-[160px] z-50 ${noBtnState ? 'fixed left-0 top-0' : 'absolute left-0 top-0'}`}
                >
                    No Thanks
                </motion.button>
            </div>
        </div>
    );
};

export default ButtonsSection;
