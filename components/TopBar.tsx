'use client';

const BANNER_TEXT =
  'Congratulations to our 2011 Unico Boys - Cal South State Cup CHAMPIONS!';

interface TopBarProps {
  visible: boolean;
  onClose: () => void;
}

export default function TopBar({ visible, onClose }: TopBarProps) {
  if (!visible) return null;

  return (
    <div
      role="banner"
      className="fixed left-0 right-0 top-0 z-[60] flex h-12 flex-shrink-0 items-center justify-center px-12 text-center text-sm font-semibold text-white sm:px-16"
      style={{ backgroundColor: '#4A90E2' }}
    >
      <p className="pr-10 sm:pr-12">{BANNER_TEXT}</p>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4A90E2] sm:right-4"
        aria-label="Close announcement"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
