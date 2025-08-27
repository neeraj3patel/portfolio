import React, { useEffect, useRef, useState } from "react";
import { MoreVertical } from "lucide-react";

const sections = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // Scroll with offset (so sticky navbar doesn't cover the target)
  const scrollWithOffset = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = headerRef.current?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Click handler for both desktop & mobile
  const handleNavClick = (name) => {
    const id = name.toLowerCase();
    // Close menu first, then scroll on next frames (mobile-safe)
    setIsMenuOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollWithOffset(id));
    });
  };

  // Auto-close on page scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    const onScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-black shadow-md backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center font-medium text-sm">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-wide">
           <h1 className="text-2xl" >
               &lt;&gt;NeerajPatel&lt;/&gt;
           </h1>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 sm:gap-6">
          {sections.map((section) => (
            <li key={section}>
              <button
                type="button"
                onClick={() => handleNavClick(section)}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        {/* Three dots (mobile) */}
        <div className="md:hidden">
          <button type="button" onClick={toggleMenu} className="text-blue-500">
            <MoreVertical size={26} />
          </button>
        </div>
      </div>

      {/* Mobile overlay dropdown (simple & reliable) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60]" onClick={() => setIsMenuOpen(false)}>
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/50" />
          {/* menu panel (tap inside doesn't close automatically) */}
          <div
            className="absolute right-3 top-[64px] w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(section)}
                    className="w-full text-left px-4 py-2 rounded-lg text-blue-800 font-semibold hover:bg-blue-100 transition"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}