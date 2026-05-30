import { useState, useRef, useCallback, useEffect, RefObject } from "react";

export function useHover<T extends HTMLElement = HTMLElement>(): [
  RefObject<T | null>,
  boolean,
] {
  const [hovering, setHovering] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseEnter = useCallback(() => setHovering(true), []);
  const handleMouseLeave = useCallback(() => setHovering(false), []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return [ref, hovering];
}
