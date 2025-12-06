import { useEffect, useState, useRef } from "react";

interface Options extends IntersectionObserverInit {}

/**
 * Custom hook: checks if an element is inside viewport.
 *
 * @returns boolean | null
 */
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: Options = { threshold: 0.1 }
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Create observer if not existing
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const observer = observerRef.current;
    observer.observe(elementRef.current);

    return () => {
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [elementRef, options.threshold]);

  return isVisible;
}
