"use client";
import { useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { HoverPreviewLink } from '../preview-link';
import { Intro, Paragraph } from './styled';

const scrambleTexts = [
    'magnificent',
    1800,
    'terrific',
    1800,
    'wonderful',
    1800,
    'superb',
    1800,
    'delightful',
    1800,
    'pioneering',
    1800,
    'magical',
    1800,
    'great',
    1800,
    'legendary',
    1800,
    'funky',
    1800,
];

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const IntroText = () => {
    const dayname = useMemo(() => weekdays[new Date().getDay()], []);

    return (
        <Intro transition={{ type: 'spring', bounce: 0.25 }}>
            <Paragraph>
                Hey, I&apos;m Patrick Lehmann—a{' '}
                <HoverPreviewLink
                    href="https://github.com/ptrcklehmann"
                    target="_blank"
                    title="Patrick Lehmann's github"
                    label="Full-Stack Developer"
                />{' '}
                specializing in React, Next.js, React Native, GraphQL, and TypeScript. Originally
                from{' '}
                <HoverPreviewLink
                    href="https://goo.gl/maps/FJqL7jfmUvnJ2Leu9"
                    target="_blank"
                    title="Lehmann's farm"
                    label="rural Brazil"
                />
                , I now call Berlin home.
            </Paragraph>
            <Paragraph>
                I&apos;m passionate about UX, AI, and building meaningful products. I&apos;ve
                shipped products like{' '}
                <HoverPreviewLink
                    href="https://thepioneer.de/"
                    target="_blank"
                    title="The Pioneer"
                    label="ThePioneer.de"
                />{' '}
                (1M+ daily users) and{' '}
                <HoverPreviewLink
                    href="https://tabletop-herald.com/"
                    target="_blank"
                    title="Tabletop Herald"
                    label="Tabletop Herald"
                />
                , created mockups and prototypes, and driven test-first, agile delivery at code-b.
            </Paragraph>
            <Paragraph>
                In my free time, I enjoy tinkering with AI, exploring the city with my dog Ponyo,
                and planning my next tent-and-van adventure.
            </Paragraph>
            <Paragraph>
                To reach out, just{' '}
                <HoverPreviewLink
                    href="mailto:connect@ptrcklehmann.com?Subject=Hello"
                    target="_blank"
                    title="Say hello"
                    label="drop me a line"
                />
                .
            </Paragraph>
            <Paragraph>
                Stay bold and have a{' '}
                <TypeAnimation speed={25} sequence={scrambleTexts} repeat={Infinity} />
                <br />
                {dayname}.
            </Paragraph>
        </Intro>
    );
};