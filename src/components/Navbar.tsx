import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, Menu, X, CalendarCheck } from "lucide-react";
import { openBookingModal } from "../lib/modalEvents";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Specialists", href: "#specialists" },
  { label: "Facilities", href: "#facilities" },
  { label: "Testimonials", href: "#testimonials" },
];

const EASE = [0.4, 0, 0.2, 1] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close drawer on scroll + add shadow when scrolled
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[color:var(--color-primary)]/10 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-[color:var(--color-primary)]">
          <HeartPulse className="h-8 w-8" strokeWidth={2.5} />
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            CareWellness
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-[color:var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={openBookingModal}
            className="flex items-center gap-2 rounded-lg bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[color:var(--color-primary)]/20 transition-all hover:bg-[color:var(--color-primary-dark)] hover:scale-105"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop — tap outside to close */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[65px] z-40 bg-slate-900/30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-down drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative z-50 overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[color:var(--color-primary)]"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => { openBookingModal(); setMobileOpen(false); }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[color:var(--color-primary)] px-5 py-3 text-sm font-bold text-white"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
