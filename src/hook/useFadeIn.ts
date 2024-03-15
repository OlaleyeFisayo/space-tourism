import { useEffect, useState } from "react";

export const useFadeIn = (factor: string | number) => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(false);
    setTimeout(() => {
      setIsFadeIn(true);
    }, 400);
  }, [factor]);

  return { isFadeIn };
};
