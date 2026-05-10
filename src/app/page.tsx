"use client";

import { useEffect, useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const [loading, setLoading] = useState(() => {
    // On the server, sessionStorage does not exist.
    if (typeof window === "undefined") return true;

    // If intro was already shown, skip loader.
    return !sessionStorage.getItem("seenIntro");
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("seenIntro", "true");
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return <IntroLoader />;
  }

  return <LandingPage />;
}