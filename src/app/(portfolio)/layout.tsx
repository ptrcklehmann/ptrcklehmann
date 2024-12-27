"use client";
import { Header } from "../components/header";
import { InitialTransition } from "../components/transitions/initial";
import { ProfileAnchorProvider } from "../hooks/useProfileAnchor";
import { StyledMain } from "../styled";

export default function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileAnchorProvider>
      <InitialTransition />
      <Header />
      <StyledMain>{children}</StyledMain>
    </ProfileAnchorProvider>
  );
}
