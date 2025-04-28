
import React from 'react';
import { BottomNav } from './BottomNav';

type LayoutProps = {
  children: React.ReactNode;
  hideNav?: boolean;
};

export const Layout = ({ children, hideNav = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 container max-w-md mx-auto px-4 pb-16 pt-6 safe-top">
        {children}
      </main>
      {!hideNav && <BottomNav />}
    </div>
  );
};
