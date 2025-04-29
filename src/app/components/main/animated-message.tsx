import { useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AnimatedMessageContainer } from './styled';

const adjectives = [
    'magnificent', 'terrific', 'incredible', 'wonderful',
    'superb', 'delightful', 'awesome', 'fantastic',
    'magical', 'great', 'legendary', 'funky'
];
const scrambleTexts = adjectives.flatMap(item => [item, 1800]);

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const AnimatedMessage = () => {
    const dayname = useMemo(() => weekdays[new Date().getDay()], []);

    return (
        <AnimatedMessageContainer>
            Stay bold and have a{' '}
            <TypeAnimation
                style={{
                    letterSpacing: '-0.05rem',
                    color: 'transparent',
                    backgroundClip: 'text',
                    backgroundImage: 'var(--green-gradient)',
                }}
                speed={25}
                sequence={scrambleTexts}
                repeat={Infinity}
            />
            <br />
            {dayname}.
        </AnimatedMessageContainer>
    );
};
