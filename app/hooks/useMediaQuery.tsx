"use client";
import { useEffect, useState } from "react";
import { createScreens } from "../constants";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
}

export default function useTailwindMediaQuery() {
  const screens = createScreens();

  const isXs = useMediaQuery(`(max-width: ${screens.xs})`);
  const isSm = useMediaQuery(
    `(min-width: ${screens.sm}) and (max-width: ${
      parseInt(screens.md, 10) - 1
    }px)`
  );
  const isMd = useMediaQuery(
    `(min-width: ${screens.md}) and (max-width: ${
      parseInt(screens.lg, 10) - 1
    }px)`
  );
  const isLg = useMediaQuery(`(min-width: ${screens.lg})`);

  return { isXs, isSm, isMd, isLg };
}
