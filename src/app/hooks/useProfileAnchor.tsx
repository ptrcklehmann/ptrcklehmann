"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface ProfileAnchorContextProps {
  isProfileOpen: boolean;
  toggleProfile: () => void;
}

const ProfileAnchorContext = createContext<
  ProfileAnchorContextProps | undefined
>(undefined);

export const ProfileAnchorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  const value: ProfileAnchorContextProps = {
    isProfileOpen,
    toggleProfile,
  };

  return (
    <ProfileAnchorContext.Provider value={value}>
      {children}
    </ProfileAnchorContext.Provider>
  );
};

export const useProfileAnchor = () => {
  const context = useContext(ProfileAnchorContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};
