
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, Store, Smartphone } from 'lucide-react';

export const BottomNav = () => {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home', icon: <Smartphone className="w-6 h-6" /> },
    { to: '/list', label: 'Shopping List', icon: <ShoppingCart className="w-6 h-6" /> },
    { to: '/categories', label: 'Categories', icon: <ShoppingBag className="w-6 h-6" /> },
    { to: '/stores', label: 'Stores', icon: <Store className="w-6 h-6" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background z-50 safe-bottom">
      <div className="container max-w-md mx-auto">
        <nav className="flex justify-around py-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex flex-col items-center p-2 rounded-md transition-colors ${
                isActive(link.to)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.icon}
              <span className="text-xs mt-1">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
