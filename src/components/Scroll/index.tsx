import { motion, useScroll } from "framer-motion";
import { LoremIpsum } from "../Lorem";
import "../Scroll/style.css";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>Demonstração com scroll</code>
      </h1>
      <LoremIpsum />
    </>
  );
}

export default Scroll;
