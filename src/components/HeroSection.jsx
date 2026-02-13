import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 md:px-8 py-15 z-10 w-full">
            {/* Couple Image Placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-12"
            >
                <div className="absolute inset-0 bg-roseGold blur-3xl opacity-20 rounded-full w-full h-full transform scale-150 -translate-y-4"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/50 shadow-2xl glass flex items-center justify-center">
                    {/* Replace src with actual image */}
                    <img
                        src="/img/img.jpeg"
                        alt="Couple"
                        className="w-full h-full object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                    />
                </div>
            </motion.div>

            {/* Typography */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                className="max-w-3xl"
            >
                <h1 className="font-elegant text-5xl md:text-7xl lg:text-8xl text-elegantDark mb-6 leading-tight drop-shadow-sm tracking-tight">
                    Will You Be My <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-roseGold to-pink-400 italic">Valentine?</span>
                </h1>

                <p className="font-body text-gray-600 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto leading-relaxed">
                    “Every moment with you feels like magic. Will you make my world even more beautiful?”
                </p>
            </motion.div>
        </section>
    );
};

export default HeroSection;
