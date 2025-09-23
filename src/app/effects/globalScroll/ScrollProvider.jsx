"use client";
import { createContext, useContext } from "react";
import { useGlobalScroll } from "./useglobalScroll";

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const scrollY = useGlobalScroll();
  return (
    <ScrollContext.Provider value={scrollY}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollY() {
  return useContext(ScrollContext);
}
