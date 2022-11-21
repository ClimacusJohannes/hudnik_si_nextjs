import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';


const Transition = ({ children }) => {

    const { asPath } = useRouter();

    return (
            <div>
                    {children}
            </div>
    )
};

export default Transition    


const variants = {
    inactive: {
        opacity: 1,
        y: "0vh",
        transition: {
            duration: 1,
            ease: 'easeInOut'
        },
    },
    out: {
        opacity: 0,
        y: "100vh",
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    in: {
        y: "100vh",
        opacity: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
};