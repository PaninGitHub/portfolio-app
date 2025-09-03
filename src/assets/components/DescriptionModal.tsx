import React, { useEffect, useRef, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Variants } from "framer-motion";
import { createPortal } from "react-dom";

type ModalAction = {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "ghost";
};

export default function DescriptionModal({
  open,
  onClose,
  title,
  subtitle,
  children,
  returnFocusRef,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions?: ModalAction[];
  returnFocusRef?: React.RefObject<HTMLElement>;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedEl = useRef<HTMLElement | null>(null);

  // Ensure portal target exists (SSR-safe)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Prevent background scroll and manage return focus
  useEffect(() => {
    if (!open) return;
    previouslyFocusedEl.current = document.activeElement as HTMLElement;
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
      if (returnFocusRef?.current) returnFocusRef.current.focus();
      else previouslyFocusedEl.current?.focus?.();
    };
  }, [open, returnFocusRef]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Basic focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const container = panelRef.current;
    if (!container) return;
    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  }, []);

  // Motion variants (unchanged)
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const panelVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 24 },
    },
    exit: { opacity: 0, y: 12, scale: 0.98 },
  };

  if (!mounted) return null; // SSR-safe
  if (!open) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999]"   // higher z to beat site headers
        initial="hidden"
        animate="visible"
        exit="exit"
        aria-hidden={!open}
      >
        {/* Overlay */}
        <motion.div
          variants={overlayVariants}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        />

        {/* Centering wrapper */}
        <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            variants={panelVariants}
            onKeyDown={handleKeyDown}
            ref={panelRef}
            className="w-[min(92vw,720px)] rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95"
          >
            {/* Header */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                {title && (
                  <h2
                    id="modal-title"
                    className="truncate text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
                  >
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-xl border border-slate-200 bg-white/70 p-2 shadow-sm transition hover:bg-white hover:shadow dark:border-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto pr-1">
              {children}
            </div>

            {/* Footer actions */}
            {/* ... your existing actions block unchanged ... */}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
