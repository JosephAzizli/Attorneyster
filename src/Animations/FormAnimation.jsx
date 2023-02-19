import { motion } from "framer-motion";

const animations = {
  initial: { scaleY: 0},
  animate: { scaleY: 1},
  exit: { scaleY: 0 },
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
