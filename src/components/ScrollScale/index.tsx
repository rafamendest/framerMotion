import { motion, useTransform, useViewportScroll } from "framer-motion";
import { LoremIpsum } from "../Lorem";

const ScrollScale = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(
    scrollYProgress, 
    [0, 1], // Intervalo de valores para o progresso do scroll
    [0.3, 4] // Intervalo de valores para a escala do elemento
  );

  return (
    <>
      <LoremIpsum />
      <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        />

        <motion.div
          style={{
            width: "150px",
            height: "150px",
            background: "red",
            margin: "100px auto 100px auto",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.div>
      <LoremIpsum />
    </>
  );
};

export default ScrollScale;
