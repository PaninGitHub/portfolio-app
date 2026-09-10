import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Props = {
    titles?: string[];
    interval?: number;
}

//Roles drawn from actual experience: C&S (full stack), Woodside (cloud/observability), ATMO (data)
const DEFAULT_TITLES = [
    "Full Stack Developer",
    "Data Engineer",
    "Cloud & Observability Engineer",
    "Texas A&M Computer Science 27'"
]

const RotatingTitle = ({ titles = DEFAULT_TITLES, interval = 3000 }: Props) => {
    const [index, setIndex] = useState(0);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % titles.length), interval);
        return () => clearInterval(id);
    }, [titles.length, interval]);

    return (
        <h2 className="font-roboto font-normal text-[16px] lg:text-[24px] text-white h-[26px] lg:h-[38px] overflow-hidden flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={titles[index]}
                    initial={reduceMotion ? { opacity: 0 } : { x: "70%", opacity: 0 }}
                    animate={reduceMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { x: "-70%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="block whitespace-nowrap"
                >
                    {titles[index]}
                </motion.span>
            </AnimatePresence>
        </h2>
    );
}

export default RotatingTitle
