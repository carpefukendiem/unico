'use client';

import { useRef, useState } from 'react';

const HERO_VIDEO_SRC =
  'https://video.wixstatic.com/video/3618d7_6c8e7260b16e4e94a1a5c741949bf7d0/720p/mp4/file.mp4';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = !next;
    setMuted(next);
    if (next) return;
    videoRef.current.play().catch(() => {});
  };

  return (
    <div className="relative mx-auto aspect-video min-h-[280px] max-w-4xl overflow-hidden rounded-2xl bg-black/40 shadow-2xl ring-2 ring-white/10">
      <video
        ref={videoRef}
        preload="auto"
        autoPlay
        loop
        playsInline
        muted
        className="h-full w-full object-cover"
        aria-label="Único Futbol Club in action"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label={muted ? 'Turn on sound' : 'Turn off sound'}
      >
        {muted ? (
          <>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
            Sound off
          </>
        ) : (
          <>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            Sound on
          </>
        )}
      </button>
    </div>
  );
}
