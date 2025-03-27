"use client";
import '../../app/globals.css';

import { FAB } from '../components/fab';
import { Header } from '../components/header';
import { InitialTransition } from '../components/transitions/loading';
import { Main } from './styled';

export default function IndexRoute({ children }: { children: React.ReactNode }) {
    return (
        <>
            <InitialTransition />
            <Header />
            <Main>{children}</Main>
            <FAB />
        </>
    );
}
