"use client";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ModalContent({
  children,
  handleBackdropClick,
}: {
  children: React.ReactNode;
  handleBackdropClick: () => void;
}) {
  useEffect(() => {
    const mc = document.getElementById("productmodal");
    if (mc) {
      mc.tabIndex = -1;
      mc.focus();
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center w-full backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="w-[80%] max-w-[700px] h-[70dvh] bg-background border-2 rounded-2xl flex flex-col py-6"
        onClick={(e) => e.stopPropagation()}
        id="productmodal"
      >
        {children}
      </div>
    </div>
  );
}

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

  return createPortal(
    <ModalContent handleBackdropClick={handleBackdropClick}>
      {children}
    </ModalContent>,
    document.body
  );
}
