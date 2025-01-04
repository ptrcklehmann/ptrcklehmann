"use client";
import { motion } from "framer-motion";

import { reviewDuration } from '.';

export const Backdrop = () => {
    return (
        <motion.div
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ ease: 'easeInOut', duration: reviewDuration }}
        />
    );
};
