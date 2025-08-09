'use client';
import { Logo } from '../logo';
import { ThemeSwitch } from '../switch';
import { HeaderContainer } from './styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <ThemeSwitch />
        </HeaderContainer>
    );
};
