'use client';
import { InteractivePreviewLink } from '../preview-link';
import { Intro, Paragraph } from './styled';
import { AnimatedMessage } from './animated-message';
import { IconBrandGithubFilled, IconMap2, IconLink, IconMailFilled } from '@tabler/icons-react';

export const IntroText = () => {
    return (
        <Intro transition={{ type: 'spring', bounce: 0.25 }}>
            <Paragraph>
                Hello, I&apos;m Patrick Lehmann, <br />a{' '}
                <InteractivePreviewLink
                    href="https://github.com/ptrcklehmann"
                    label="Frontend Developer"
                    previewText={
                        <>
                            Github <IconBrandGithubFilled size={20} />
                        </>
                    }
                />{' '}
                specializing in React, Next.js, React Native, GraphQL, and TypeScript.
            </Paragraph>
            <Paragraph>
                Originally from{' '}
                <InteractivePreviewLink
                    href="https://maps.app.goo.gl/7yt2ZzMfwrcd53PAA"
                    label="rural Brazil"
                    previewText={
                        <>
                            Travel <IconMap2 size={20} />
                        </>
                    }
                />
                , now living in vibrant Berlin. Passionate about UX, AI, and crafting meaningful
                products. Previously at code-b, where I shipped projects like{' '}
                <InteractivePreviewLink
                    href="https://thepioneer.de/"
                    label="ThePioneer.de"
                    previewText={
                        <>
                            Visit <IconLink size={20} />
                        </>
                    }
                />{' '}
                and{' '}
                <InteractivePreviewLink
                    href="https://tabletop-herald.com/"
                    label="Tabletop Herald"
                    previewText={
                        <>
                            Visit <IconLink size={20} />
                        </>
                    }
                />
                , designed mockups, prototypes, and implemented test-first, agile practices.
            </Paragraph>
            <Paragraph>
                When not coding, you&apos;ll find me exploring the city with my dog Ponyo or
                planning our next tent-and-van adventure.
            </Paragraph>
            <Paragraph>
                Want to connect? Just{' '}
                <InteractivePreviewLink
                    href="mailto:connect@ptrcklehmann.com?Subject=Hello"
                    label="drop me a line"
                    previewText={
                        <>
                            Say Hello <IconMailFilled size={20} />
                        </>
                    }
                />
                .
            </Paragraph>
            <AnimatedMessage />
        </Intro>
    );
};
