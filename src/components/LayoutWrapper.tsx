import React, { ReactNode, useEffect } from 'react';
import { Layout } from '@/page/LandingPage/Layout';
import { useLocation } from 'react-router';

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Layout>{children}</Layout>;
};

export default LayoutWrapper;
