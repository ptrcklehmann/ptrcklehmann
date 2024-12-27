import { AnimatePresence } from "framer-motion";
import { Backdrop, InitialContainer, Title } from "./styled";
import { Row } from "./row";
import { useEffect, useState } from "react";

const rows = [1, 2, 3, 4, 5];
export const reviewDuration = 1;

export const InitialTransition = () => {
  const [hasFinishedAnimating, setHasFinishedAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasFinishedAnimating(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!hasFinishedAnimating && (
        <>
          <InitialContainer
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{
              ease: "easeInOut",
              duration: reviewDuration,
            }}
          >
            {rows.map((row) => (
              <Row key={row} index={row}>
                {row === 3 ? (
                  <Title
                    as={Title}
                    initial={{ opacity: 0, transform: "translateY(-35px)" }}
                    exit={{ opacity: 0, transform: "translateY(-35px)" }}
                    animate={{ opacity: 1, transform: "translateY(0)" }}
                    transition={{ ease: "linear", duration: 0.2 }}
                  >
                    Patrick
                    <br /> Lehmann
                  </Title>
                ) : null}
              </Row>
            ))}
          </InitialContainer>
          <Backdrop />
        </>
      )}
    </AnimatePresence>
  );
};
