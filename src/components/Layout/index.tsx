import { useState } from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { LayoutContainer, Main } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <LayoutContainer>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}
