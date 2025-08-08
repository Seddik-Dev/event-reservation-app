"use client";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LandingPage from "@/components/pages/LandingPage";

export default function Layouts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  return (
    <LandingPage
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      isScrolled={isScrolled}
      setIsScrolled={setIsScrolled}
      dark={dark}
      setDark={setDark}
    />
  );
}
