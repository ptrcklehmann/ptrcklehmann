"use client";
import { Header } from "../components/header";
import { InitialTransition } from "../components/transitions/initial";
import { Main } from './styled';

export default function IndexRoute({ children }: { children: React.ReactNode }) {
    return (
        <>
            <InitialTransition />
            <Header />
            <Main>{children}</Main>
        </>
    );
}
