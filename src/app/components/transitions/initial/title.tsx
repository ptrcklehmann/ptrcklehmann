import { motion } from 'framer-motion';
import { Title, TitleContainer, TitleLine } from './styled';

const titleVariants = {
    initial: { y: 100, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1.0],
        },
    },
    exit: {
        y: -100,
        opacity: 0,
        transition: {
            duration: 0.5,
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
                    exit="exit"
                >
                    Lehmann
                </motion.span>
            </TitleLine>
        </TitleContainer>
    );
};
