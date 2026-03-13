'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';

const TOPBAR_STORAGE_KEY = 'unico-topbar-dismissed';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showTopBar, setShowTopBar] = useState(false);

  useEffect(() => {
    try {
      setShowTopBar(localStorage.getItem(TOPBAR_STORAGE_KEY) !== 'true');
    } catch {
      setShowTopBar(true);
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
