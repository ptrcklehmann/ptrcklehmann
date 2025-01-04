import { usePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Title } from './styled';

export const TitleAnimated = () => {
    return (
        <Title
            initial={{
                opacity: 0,
                y: 0,
            }}
            animate={{
                opacity: 1,
                y: 1,
                animationDelay: '2s',
            }}
            exit={{ opacity: 0 }}
            key="title"
        >
            Patrick
            <br />
            Lehmann
        </Title>
    );
};
