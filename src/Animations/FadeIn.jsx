import { motion } from "framer-motion";

const animations = {
  initial: { width: 0},
  animate: { width: "100%"},
  exit: { width: window.innerWidth },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
