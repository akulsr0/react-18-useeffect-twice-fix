import { useEffect } from "react";

const useDevEffect = (cb, deps) => {
  let ran = false;
  useEffect(() => {
    if (ran) return;
    cb();
    return () => (ran = true);
  }, deps);
};

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const useOnceEffect = isDev ? useDevEffect : useEffect;
