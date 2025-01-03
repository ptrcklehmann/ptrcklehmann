"use client";
import { HoverPreviewLink } from "../preview-link";
import { Intro, Paragraph } from './styled';

export const IntroText = () => (
    <Intro transition={{ type: 'spring', bounce: 0.25 }}>
        <Paragraph>
            Hey there, 👋 I&apos;m Patrick Lehmann—a detail-oriented{' '}
            <HoverPreviewLink
                href="https://github.com/ptrcklehmann"
                target="_blank"
                title="patrick lehmann's github"
                label="front end developer"
            />{' '}
            from{' '}
            <HoverPreviewLink
                href="https://goo.gl/maps/FJqL7jfmUvnJ2Leu9"
                target="_blank"
                title="Lehmann's farm"
                label="rural Brazil"
            />
            , currently living in Berlin. I&apos;m your designer&apos;s favorite programmer,
            bringing over seven years of web development experience and a passion for UX design, AI,
            and building impactful products.{' '}
        </Paragraph>
        <Paragraph>
            These days, I&apos;m crafting innovative features at{' '}
            <HoverPreviewLink
                href="https://code-b.com/"
                target="_blank"
                title="code-b agile websolutions"
                label="code-b"
            />
            , working with React and other hip frameworks. If you fancy a chat, drop me a line—stay
            bold and have a delightful day!
        </Paragraph>
    </Intro>
);
