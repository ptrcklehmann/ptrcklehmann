import { motion, Variants } from 'framer-motion';

import { TitleContainer, TitleLine } from './styled';

const titleVariants: Variants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: i * 0.5,
        },
    }),
    exit: {
        y: -100,
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export const TitleAnimated = () => {
    return (
        <TitleContainer>
            <TitleLine>
                <motion.span
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    Patrick
                </motion.span>
            </TitleLine>
            <TitleLine>
                <motion.span
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    custom={1}
                    exit="exit"
                >
                    Lehmann
                </motion.span>
            </TitleLine>
        </TitleContainer>
    );
};
