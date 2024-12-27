"use client";
import { useTheme } from "next-themes";
import { SwitchButton, SwitchSpan } from "./styled";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleOnClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <SwitchButton onClick={handleOnClick}>
      <SwitchSpan>Switch</SwitchSpan>
    </SwitchButton>
  );
};