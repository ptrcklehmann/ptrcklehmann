"use client";
import { TypeAnimation } from 'react-type-animation';
import { HoverPreviewLink } from '../preview-link';
import { Intro, Paragraph } from './styled';
import { useMemo } from 'react';

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
                Hey there, 👋 I&apos;m Patrick Lehmann, a{' '}
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
                , currently living in Berlin. I thrive in the fast-paced tech landscape, with a
                passion for UX, AI, and creating meaningful products.
            </Paragraph>
            <Paragraph>
                At{' '}
                <HoverPreviewLink
                    href="https://code-b.com/"
                    target="_blank"
                    title="code-b agile websolutions"
                    label="code-b"
                />
                , I&apos;m crafting innovative features using React and other cutting-edge
                frameworks.
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