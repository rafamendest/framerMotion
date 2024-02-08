import { motion, useTime, useTransform } from "framer-motion";
import "./style.css";

const Rotate = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  
    return (
      <div className="rotation">
        <motion.div style={{ rotate, scale: '0.1' }} className="logo"><img src="assets/cpqd.png"/></motion.div>
      </div>
    );
  };

  export default Rotate;