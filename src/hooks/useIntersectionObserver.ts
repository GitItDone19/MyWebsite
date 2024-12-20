import { useEffect, useState, useCallback } from 'react';

export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the observer callback
  const observerCallback = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (currentRef) {
      const observer = new IntersectionObserver(observerCallback, options);
      observer.observe(currentRef);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, options, observerCallback]);

  return isVisible;
};