import { GridContainer, GridItem } from './styled';

const gridItemVariants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: (i: number) => ({
        opacity: 1,
        scaleY: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.645, 0.045, 0.355, 1.0],
        },
    }),
    exit: (i: number) => ({
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.645, 0.045, 0.355, 1.0],
        },
    }),
};

export const LoadingGrid = () => {
    return (
        <GridContainer>
            {[...Array(5)].map((_, i) => (
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
