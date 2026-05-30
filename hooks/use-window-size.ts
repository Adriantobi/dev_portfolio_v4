import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getScreenSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    getScreenSize();

    window.addEventListener("resize", getScreenSize);

    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  return size;
}
