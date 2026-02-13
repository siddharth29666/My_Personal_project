import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupMessage = ({ onClose }) => {
    const [showSweetAlert, setShowSweetAlert] = useState(false);

    const handleLoveClick = () => {
        setShowSweetAlert(true);
        // Auto hide after a few seconds or let user close
        setTimeout(() => setShowSweetAlert(false), 4000);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rose-50/95 backdrop-blur-xl p-4 md:p-8 overflow-y-auto"
                onClick={onClose}
            >
                {/* Full Screen Celebration Layout */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-5xl bg-white shadow-2xl rounded-[3rem] overflow-hidden border border-rose-100 flex flex-col md:flex-row min-h-[60vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Left Column: Video */}
                    <div className="md:w-1/2 bg-black relative flex items-center justify-center bg-gradient-to-br from-rose-900 to-black">
                        {/* Video Element */}
                        <video
                            className="w-full h-full object-cover absoulte inset-0 opacity-90 hover:opacity-100 transition-opacity duration-500"
                            autoPlay
                            loop
                            muted // Start muted for autoplay policy, user can unmute
                            controls
                            playsInline
                        >
                            {/* Replace src with your local file path, e.g., "/video.mp4" */}
                            <source src="/img/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Fallback Overlay if no video */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20">
                            <span className="text-white/50 text-sm font-light tracking-widest uppercase">Our Story Begins</span>
                        </div>
                    </div>

                    {/* Right Column: Message */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-rose-50/50 relative">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full blur-[60px]" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/20 rounded-full blur-[60px]" />

                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-elegant text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 mb-6 leading-tight drop-shadow-sm"
                        >
                            Best. Decision. Ever. 💍
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.8 }}
                            transition={{ delay: 0.5 }}
                            className="font-body text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-md"
                        >
                            "You just made my heart smile. I promise to cherish you today, tomorrow, and forever. Let's make every moment magical."
                        </motion.p>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4"
                        >
                            <button
                                onClick={handleLoveClick}
                                className="px-8 py-3 bg-rose-500 text-white font-medium rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            >
                                <span>I Love You Too</span> ❤️
                            </button>
                        </motion.div>

                        <motion.button
                            onClick={onClose}
                            className="mt-8 text-sm text-gray-400 font-light hover:text-rose-400 transition-colors uppercase tracking-widest border-b border-transparent hover:border-rose-300"
                        >
                            Return to Home
                        </motion.button>
                    </div>
                </motion.div>

                {/* Sweet Alert Overlay */}
                <AnimatePresence>
                    {showSweetAlert && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: -50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: -50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="fixed z-[150] bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border border-rose-200 flex flex-col items-center gap-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center min-w-[300px]"
                        >
                            <span className="text-4xl">🥰</span>
                            <h3 className="text-2xl font-elegant text-rose-600">Yay! I Love You More!</h3>
                            <p className="text-gray-500 font-body text-sm">Forever and always.</p>
                            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-600 rounded-2xl blur opacity-20 -z-10"></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
};

export default PopupMessage;
