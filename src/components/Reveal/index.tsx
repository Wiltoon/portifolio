import { ComponentChildren } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import styled, { css } from 'styled-components';

type Direction = 'up' | 'left' | 'right' | 'zoom';

const offsets: Record<Direction, string> = {
    up: 'translate3d(0, 32px, 0)',
    left: 'translate3d(-40px, 0, 0)',
    right: 'translate3d(40px, 0, 0)',
    zoom: 'scale(0.92)',
};

const Wrapper = styled.div<{ $visible: boolean; $direction: Direction; $delay: number }>`
    opacity: 0;
    transform: ${(p) => offsets[p.$direction]};
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: ${(p) => p.$delay}ms;
    will-change: opacity, transform;

    ${(p) => p.$visible && css`
        opacity: 1;
        transform: none;
    `}

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        transform: none;
        transition: none;
    }
`;

interface RevealProps {
    children: ComponentChildren;
    direction?: Direction;
    delay?: number;
    className?: string;
}

/** Fades/slides its children in the first time they scroll into view. */
export function Reveal({ children, direction = 'up', delay = 0, className }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Wrapper ref={ref} className={className} $visible={visible} $direction={direction} $delay={delay}>
            {children}
        </Wrapper>
    );
}
