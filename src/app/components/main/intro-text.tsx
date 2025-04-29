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
                Hey there, 👋 I&apos;m Patrick Lehmann—a{' '}
                <HoverPreviewLink
                    href="https://github.com/ptrcklehmann"
                    target="_blank"
                    title="Patrick Lehmann's github"
                    label="Full-Stack Developer"
                />{' '}
                now based in Berlin (originally from{' '}
                <HoverPreviewLink
                    href="https://goo.gl/maps/FJqL7jfmUvnJ2Leu9"
                    target="_blank"
                    title="Lehmann's farm"
                    label="rural Brazil"
                />
                ). With 5+ years turning ideas into production-ready web & mobile apps, I specialize
                in React, Next.js, React Native, GraphQL and TypeScript.
            </Paragraph>
            <Paragraph>
                After helping launch high-traffic platforms like{' '}
                <HoverPreviewLink
                    href="https://thepioneer.de/"
                    target="_blank"
                    title="The Pioneer"
                    label="The Pioneer"
                />{' '}
                (1M+ daily users) and Germany&apos;s fastest-growing{' '}
                <HoverPreviewLink
                    href="https://tabletop-herald.com/"
                    target="_blank"
                    title="Tabletop Herald"
                    label="tabletop-gaming"
                />{' '}
                hub, I thrive on solving tough UX challenges, building test-driven features, and
                mentoring juniors.{' '}
            </Paragraph>
            <Paragraph>
                When I&apos;m not coding, you&apos;ll find me geeking out over AI experiments,
                leveling up my dog Ponyo 🐕 on our city walks, or planning my next tent-and-van
                adventure 🏕️.
            </Paragraph>
            <Paragraph>
                Let&apos;s build something meaningful—
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