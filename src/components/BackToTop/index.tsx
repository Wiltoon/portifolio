import { useState, useEffect } from 'preact/hooks';
import { AnimatedSection } from '../Animations';
import { useScrollToTop } from '../../utils/navigation';
import {
  BackToTopButton,
  BackToTopIcon
} from './styles';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatedSection>
      <BackToTopButton onClick={scrollToTop}>
        <BackToTopIcon>↑</BackToTopIcon>
      </BackToTopButton>
    </AnimatedSection>
  );
}
