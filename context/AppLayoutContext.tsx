"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

interface AppLayoutState {
  showHeader: boolean;
  showFooter: boolean;
}

interface LayoutContextState {
  layoutState: AppLayoutState;
  setLayoutState: (state: AppLayoutState) => void;
  componentRef: React.RefObject<HTMLDivElement>;
  toggleHeaderLayout: (value?: boolean) => void;
  toggleFooterLayout: (value?: boolean) => void;
}

export const AppLayoutContext = createContext<LayoutContextState | null>(null);

export default function LayoutContextProvider({
                                                children,
                                              }: {
  children: React.ReactNode;
}) {
  const [layoutState, setLayoutState] = useState<AppLayoutState>({
    showHeader: true,
    showFooter: false,
  });

  const componentRef = useRef<HTMLDivElement>(null);

  const toggleHeaderLayout = useCallback(
    (value?: boolean) => {
      setLayoutState({
        ...layoutState,
        showHeader: value || !layoutState.showHeader,
      });
    },
    [layoutState.showHeader],
  );

  const toggleFooterLayout = useCallback(
    (value?: boolean) => {
      setLayoutState({
        ...layoutState,
        showFooter: value || !layoutState.showFooter,
      });
    },
    [layoutState.showFooter],
  );

  useEffect(() => {
    const handleScrollToBottom = () => {
      // const targetElement = componentRef.current;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight;
      const bodyHeight = document.body.scrollHeight;

      const isAtBottom = scrollPosition >= bodyHeight;
      setLayoutState({ ...layoutState, showFooter: isAtBottom });
    };

    window.addEventListener("scroll", handleScrollToBottom);
    return () => {
      window.removeEventListener("scroll", handleScrollToBottom);
    };
  }, []);

  const value: LayoutContextState = useMemo(() => {
    return {
      layoutState,
      setLayoutState,
      componentRef,
      toggleHeaderLayout,
      toggleFooterLayout,
    };
  }, [layoutState, setLayoutState, toggleHeaderLayout, toggleFooterLayout]);

  return (
    <AppLayoutContext.Provider value={value}>
      {children}
    </AppLayoutContext.Provider>
  );
}

export const useAppLayout = () => {
  const context = useContext(AppLayoutContext);
  if (!context) {
    console.log("App Layout must be used within a LayoutContextProvider");
    throw new Error("App Layout must be used within a LayoutContextProvider");
  }
  return context;
};
