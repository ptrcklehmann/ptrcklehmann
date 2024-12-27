"use client";
import { ColorSchemePreference } from "nextjs-darkmode";
import { SwitchButton, SwitchSpan } from "./styled";
import { useMode } from "nextjs-darkmode/hooks";

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
