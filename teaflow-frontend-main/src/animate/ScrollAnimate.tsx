import { useScrollAnimation } from './useScrollAnimation';

interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-in' | 'rotate-in' | 'slide-up' | 'bounce-in';
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
}

const ScrollAnimate = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  triggerOnce = false 
}: ScrollAnimateProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce });

  const animationClass = `scroll-${animation}`;
  const delayClass = delay > 0 ? `scroll-delay-${Math.min(Math.floor(delay * 10), 6)}` : '';
  const visibleClass = isVisible ? 'visible' : '';

  return (
    <div 
      ref={elementRef} 
      className={`${animationClass} ${delayClass} ${visibleClass} ${className}`.trim()}
      style={delay > 0 && delay <= 0.6 ? { transitionDelay: `${delay}s` } : {}}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
