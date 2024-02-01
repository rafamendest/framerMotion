import { motion } from "framer-motion";

const MotionDiv = () => {
  const variants = {
    variantA: { scale: 1 },
    variantB: { scale: 1.25 },
  };

  return (
    <>
      <div id="test">
        <h1>motion div</h1>
      </div>
      <motion.div
        style={{
          width: 400,
          height: 500,
          borderRadius: 30,
          margin: "auto",
          backgroundColor: "rgba(255,255,255,0.5)",
          marginTop: "5rem",
        }}
        variants={variants}
        initial="variantA"
        whileHover="variantB"
        transition={{ type: "spring", stiffness: 500, damping: 20, mass: 1 }}
      />
    </>
  );
};

export default MotionDiv;
