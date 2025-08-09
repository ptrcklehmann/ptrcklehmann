import { Variants } from 'framer-motion';
import { GridContainer, GridItem } from './styled';

// Blinds reveal: start fully covered (scaleY: 1), then open upwards (scaleY: 0)
const gridItemVariants: Variants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: (i: number) => ({
        opacity: 1,
        scaleY: 1,
        transition: {
            duration: 0.6,
            delay: i * 0.1, // top-to-bottom stagger
            ease: [0.22, 1, 0.36, 1], // easeOutCubic for a crisp release
        },
    }),
    exit: (i: number) => ({
        opacity: 0,
        scaleY: -1,
        transition: {
            delay: i * 0.05, // stagger exit
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
        },
    }),
};

export const LoadingGrid = () => {
    return (
        <GridContainer>
            {[...Array(7)].map((_, i) => (
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
