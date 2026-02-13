import React, { useState, useEffect, useRef } from 'react';
import FloatingHearts from './components/FloatingHearts';
import HeroSection from './components/HeroSection';
import ButtonsSection from './components/ButtonsSection';
import PopupMessage from './components/PopupMessage';
import HeartBurst from './components/HeartBurst';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Attempt to play music on load
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked, waiting for interaction");
        }
      }
    };
    playMusic();

    // Ensure music plays after first interaction if blocked
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, [hasInteracted]);

  const handleYesClick = () => {
    setShowBurst(true);
    setTimeout(() => {
      setShowPopup(true);
      setShowBurst(false);
    }, 500); // Slight delay for the burst to be seen before modal
  };

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="relative min-h-screen selection:bg-rose-100 selection:text-rose-900 overflow-hidden font-body bg-softBlush transition-colors duration-1000">
      <FloatingHearts />
      {showBurst && <HeartBurst />}

      {/* Background Music - Hidden */}
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3"
        loop
        className="hidden"
      />

      {/* Mute/Unmute Button - Minimalistic */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/40 backdrop-blur-sm text-rose-400 hover:bg-white/60 transition-all shadow-sm border border-white/30"
        onClick={(e) => {
          e.stopPropagation();
          if (audioRef.current) {
            if (isPlaying) audioRef.current.pause();
            else audioRef.current.play();
            setIsPlaying(!isPlaying);
          }
        }}
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0h-2.5l-5 5v5l5 5h2.5v-10zm4 0v18l-9-9 9-9z" /></svg>
        ) : (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zm-2.5-8.77v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM7 9v6h4l5 5V4L11 9H7z" /></svg>
        )}
      </motion.button>

      {/* Main Content */}
      <AnimatePresence mode='wait'>
        {!showPopup && (
          <motion.div
            key="main"
            className="flex flex-col items-center justify-center min-h-screen z-10 relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection />
            <ButtonsSection onYes={handleYesClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Overlay */}
      {showPopup && (
        <PopupMessage onClose={closePopup} />
      )}
    </div>
  );
}

export default App;
