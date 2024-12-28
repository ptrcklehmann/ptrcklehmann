"use client";
import { AnimatePresence } from "framer-motion";

import { useProfileAnchor } from '@/hooks/useProfileAnchor';

import { Container } from "./styled";

export const Profile = () => {
  const { isProfileOpen } = useProfileAnchor();

  return (
    <AnimatePresence>
      {isProfileOpen && (
        <Container
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
        >
          <h1>Profile</h1>
        </Container>
      )}
    </AnimatePresence>
  );
};