"use client";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";
import { BackButton } from "../back-button";
import { Logo } from "../logo";
import { ThemeSwitch } from "../switch";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderContainer, LogoContainer } from "./styled";

export const Header = () => {
  const { isProfileOpen, toggleProfile } = useProfileAnchor();
  return (
    <HeaderContainer>
      <AnimatePresence>
        <LogoContainer
          key={isProfileOpen ? "profile" : "logo"}
          as={motion.div}
          animate={{
            transform: isProfileOpen ? "translateX(0)" : "translateX(-9rem)",
            columnGap: isProfileOpen ? "0.5rem" : "3.5rem",
          }}
        >
          <BackButton />
          <Logo />
        </LogoContainer>
        <ThemeSwitch />
      </AnimatePresence>
    </HeaderContainer>
  );
};