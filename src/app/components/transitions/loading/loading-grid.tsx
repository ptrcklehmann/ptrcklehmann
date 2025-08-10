import { Variants } from 'framer-motion';
import { GridContainer, GridItem } from './styled';

const gridItemVariants: Variants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: (i: number) => ({
        opacity: 1,
        scaleY: 1,
        transition: {
            duration: 0.6,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
    exit: (i: number) => ({
        opacity: 0,
        scaleY: -1,
        transition: {
            delay: i * 0.05,
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
        },
    }),
};

export const LoadingGrid = () => {
    return (
        <GridContainer>
            {[...Array(6)].map((_, i) => (
                <GridItem
                    key={i}
                    custom={i}
                    variants={gridItemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                />
            ))}
        </GridContainer>
    );
};
