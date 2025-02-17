'use client';

import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

const DownArrow = () => {
    return (
        <motion.div
            className="absolute top-[85%] left-[42.5%] flex justify-center items-center transform -translate-x-1/2 text-white text-8xl"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        >
            <MdKeyboardArrowDown />
        </motion.div>  
    );
};

export default DownArrow;