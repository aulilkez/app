/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

// Deklarasikan 'eruda' agar TypeScript tidak error
declare const eruda: any;

export const ErudaDev = (): null => {
  useEffect((): void => {
    if (process.env.NODE_ENV === "development") {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/eruda";
      script.onload = (): void => {
        eruda.init();
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
};
