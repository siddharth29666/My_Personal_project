import React from 'react';
import { motion } from 'framer-motion';

const HeartBurst = () => {
    // Generate a fixed number of particles
    const particles = Array.from({ length: 30 });

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] flex items-center justify-center overflow-hidden">
            {particles.map((_, i) => (
                <Particle key={i} index={i} />
            ))}
        </div>
    );
};

const Particle = ({ index }) => {
    const angle = (index / 30) * 360; // Spread around circle
    const distance = Math.random() * 300 + 100; // Random distance
    const delay = Math.random() * 0.2;

    return (
        <motion.div
            initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
            animate={{
                opacity: 0,
                x: Math.cos(angle * (Math.PI / 180)) * distance,
                y: Math.sin(angle * (Math.PI / 180)) * distance,
                scale: Math.random() * 1 + 0.5
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay }}
            className="absolute text-2xl"
            style={{ color: ['#ff4d6d', '#ff8fa3', '#e0bfb8'][index % 3] }}
        >
            ❤️
        </motion.div>
    );
};

export default HeartBurst;
