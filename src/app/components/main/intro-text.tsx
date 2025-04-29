'use client';
import { HoverPreviewLink } from '../preview-link';
import { Intro, Paragraph } from './styled';
import { AnimatedMessage } from './animated-message';

export const IntroText = () => {
    return (
        <Intro transition={{ type: 'spring', bounce: 0.25 }}>
            <Paragraph>
                Hello, I&apos;m Patrick Lehmann 👋, <br />a{' '}
                <HoverPreviewLink
                    href="https://github.com/ptrcklehmann"
                    label="Full-Stack Developer"
                    previewText="Github"
                />{' '}
                specializing in React, Next.js, React Native, GraphQL, and TypeScript.
            </Paragraph>
            <Paragraph>
                Originally from{' '}
                <HoverPreviewLink
                    href="https://maps.app.goo.gl/UTtFW9nr6XrWBMjs5"
                    label="rural Brazil"
                    previewText="Visit"
                />{' '}
                🧑‍🌾, now living in vibrant Berlin. Passionate about UX, AI 🤖, and crafting
                meaningful products. Previously at code-b, where I shipped projects like{' '}
                <HoverPreviewLink
                    href="https://thepioneer.de/"
                    label="ThePioneer.de"
                    previewText="Visit"
                />{' '}
                (1M+ daily users) and{' '}
                <HoverPreviewLink
                    href="https://tabletop-herald.com/"
                    label="Tabletop Herald"
                    previewText="Visit"
                />
                , designed mockups, prototypes, and implemented test-first, agile practices.
            </Paragraph>
            <Paragraph>
                When not coding, you&apos;ll find me exploring the city with my dog Ponyo 🐶 or
                planning our next tent-and-van adventure 🏕️🚐.
            </Paragraph>
            <Paragraph>
                Want to connect? Just{' '}
                <HoverPreviewLink
                    href="mailto:connect@ptrcklehmann.com?Subject=Hello"
                    label="drop me a line"
                    previewText="Say Hello"
                />
                .
            </Paragraph>
            <AnimatedMessage />
        </Intro>
    );
};
