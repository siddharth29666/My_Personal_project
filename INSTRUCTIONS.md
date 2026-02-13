# Valentine's Day Landing Page ❤️

This is a romantic, animated landing page built with React, Tailwind CSS, and Framer Motion.

## 🚀 How to Run

1. Open a terminal in this folder.
2. Run `npm run dev` to start the local server.
3. Open the link shown (usually `http://localhost:5173`).

## 🖼️ How to Add Your Own Photos & Video

1. **Couple Photo**:
   - Save your photo as `couple.jpg` (or any name) inside the `src/assets` folder.
   - Open `src/components/HeroSection.jsx`.
   - Update the import or path. For example:
     ```jsx
     import couplePhoto from '../assets/couple.jpg';
     // ...
     <HeroSection heroImage={couplePhoto} ... />
     ```
     (Note: You might need to pass the prop from `App.jsx` or import directly in `HeroSection.jsx`).

2. **Video**:
   - Save your video file in the `public` folder `public/video.mp4`.
   - Open `src/components/VideoSection.jsx`.
   - Change the `src` in the `<source>` tag to `/video.mp4`.

3. **Background Music**:
   - Replace the `src` URL in `src/App.jsx` `<audio>` tag with your own music file (place it in `public` folder) or a direct URL.

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` to change the romantic color palette.
- **Text**: Edit `src/components/HeroSection.jsx` and `PopupMessage.jsx` to change the love messages.

Enjoy your special day! 💖
