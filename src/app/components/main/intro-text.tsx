"use client";
import { HoverPreviewLink } from "../preview-link";
import { Intro, Paragraph } from './styled';

export const IntroText = () => {
    return (
        <Intro transition={{ type: 'spring', bounce: 0.25 }}>
            <Paragraph>
                Hello, I&apos;m Patrick Lehmann—a{' '}
                <HoverPreviewLink
                    href="https://github.com/ptrcklehmann"
                    target="_blank"
                    title="patrick lehmann's github"
                    label="Front-end Developer"
                />{' '}
                and your designer&apos;s favorite programmer.
            </Paragraph>
            <Paragraph>
                Born in Brazil and now calling Berlin home, I&apos;m passionate about the
                ever-evolving tech landscape, with a special focus on UX design, AI, and creating
                impactful products.
            </Paragraph>
            <Paragraph>
                Currently, I&apos;m developing innovative features at{' '}
                <HoverPreviewLink
                    href="https://code-b.com/"
                    target="_blank"
                    title="code-b agile websolutions"
                    label="code-b"
                />
                .
            </Paragraph>
        </Intro>
    );
};
