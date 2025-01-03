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
    <SwitchButton onClick={handleOnClick}>
      <SwitchSpan>Switch</SwitchSpan>
    </SwitchButton>
  );
};
