"use client";
import { ColorSchemePreference } from "nextjs-darkmode";
import { useMode } from "nextjs-darkmode/hooks";

import { SwitchButton, SwitchSpan } from "./styled";

export const ThemeSwitch = () => {
  const { resolvedMode, setMode } = useMode();

  const handleOnClick = () => {
    setMode(
      resolvedMode === "dark"
        ? ("light" as ColorSchemePreference)
        : ("dark" as ColorSchemePreference)
    );
  };

  return (
      <SwitchButton
          type="button"
          onClick={handleOnClick}
          aria-label="Toggle theme"
          aria-pressed={resolvedMode === 'dark'}
          tabIndex={0}
          role="switch"
      >
          <SwitchSpan>Switch</SwitchSpan>
      </SwitchButton>
  );
};
