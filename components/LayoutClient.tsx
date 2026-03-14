'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import GHLWidgetA11yPatch from '@/components/GHLWidgetA11yPatch';

const TOPBAR_STORAGE_KEY = 'unico-topbar-dismissed';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  /* Default to visible so SSR reserves the space and hydration doesn't shift
     the hero downward (was causing CLS 0.036 on desktop). useEffect only
     *hides* the bar for returning visitors who previously dismissed it. */
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(TOPBAR_STORAGE_KEY) === 'true') {
        setShowTopBar(false);
      }
    } catch {
      /* keep visible */
    }
  }, []);

  const handleCloseTopBar = () => {
    setShowTopBar(false);
    try {
      localStorage.setItem(TOPBAR_STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
  };

  return (
    <>
      <GHLWidgetA11yPatch />
      <TopBar visible={showTopBar} onClose={handleCloseTopBar} />
      <Header topOffset={showTopBar ? 47 : 0} />
      <main
        id="main-content"
        className={showTopBar ? 'pt-12' : ''}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
