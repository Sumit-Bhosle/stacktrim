"use client";

import { useEffect, useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import LandingPage from "@/components/LandingPage";


export default function Home() {
  // null = initial state while deciding what to render
  // true = show intro loader
  // false = show landing page
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntro");

    // If intro was already shown, skip it
    if (hasSeenIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 0);

      return () => clearTimeout(timer);
    }

    // Show intro loader
    const startTimer = setTimeout(() => {
      setShowIntro(true);
    }, 0);

    // Hide intro after 2.5 seconds
    const endTimer = setTimeout(() => {
      sessionStorage.setItem("seenIntro", "true");
      setShowIntro(false);
    }, 2500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);

  // During the initial render, show IntroLoader to avoid hydration mismatch.
  if (showIntro === null || showIntro) {
    return <IntroLoader />;
  }

  return <LandingPage />;
}