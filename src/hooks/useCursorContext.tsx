"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useMotionValue, MotionValue } from "framer-motion";
import { CIRCLE_PREVIEW_RADIUS } from "@/lib/constants";

export type PreviewVariant = "" | "cursorEnter" | "cursorLeave";

type CursorContextType = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  previewTarget: string | null;
  setPreviewTarget: (url: string | null) => void;
  isHovering: boolean;
  initialPreviewVariant: PreviewVariant;
  setInitialPreviewVariant: (variant: PreviewVariant) => void;
  animatePreviewVariant: PreviewVariant;
  setAnimatePreviewVariant: (variant: PreviewVariant) => void;
  animatePreview: (variant: PreviewVariant) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursorContext must be used within a CursorProvider");
  }
  return context;
};

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [previewTarget, setPreviewTarget] = useState<string | null>(null);
  const [initialPreviewVariant, setInitialPreviewVariant] =
    useState<PreviewVariant>("");
  const [animatePreviewVariant, setAnimatePreviewVariant] =
    useState<PreviewVariant>("cursorEnter");

  const isHovering = Boolean(previewTarget);

  const animatePreview = (variant: PreviewVariant) => {
    setInitialPreviewVariant(animatePreviewVariant);
    setAnimatePreviewVariant(variant);
  };

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - CIRCLE_PREVIEW_RADIUS);
      y.set(e.clientY - CIRCLE_PREVIEW_RADIUS);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <CursorContext.Provider
      value={{
        x,
        y,
        previewTarget,
        setPreviewTarget,
        isHovering,
        initialPreviewVariant,
        setInitialPreviewVariant,
        animatePreviewVariant,
        setAnimatePreviewVariant,
        animatePreview,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};