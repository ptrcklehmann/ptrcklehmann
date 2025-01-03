'use client';
import { Logo } from '../logo';
import { ThemeSwitch } from '../switch';
import { HeaderContainer, LogoContainer } from './styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <ThemeSwitch />
        </HeaderContainer>
    );
};
