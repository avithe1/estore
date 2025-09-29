"use client";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          router.back();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  if (!mounted) return null;

  const handleBackdropClick = () => {
    router.back();
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="modal-content relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
        data-testid="modal-content"
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
