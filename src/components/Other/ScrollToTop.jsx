import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
//This hook returns the current location object.
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}