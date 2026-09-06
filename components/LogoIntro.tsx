"use client";

import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => setClosing(true), 1700);
    const removeTimer = window.setTimeout(() => setVisible(false), 2500);
    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return <div className={`logo-intro ${closing ? "is-closing" : ""}`} aria-label="Saffron House">
    <div className="logo-intro-mark"><span>S</span><i /></div>
    <div className="logo-intro-name">SAFFRON HOUSE<small>AUTHENTIC INDIAN KITCHEN</small></div>
  </div>;
}
