import "./style.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import ReOrderGroup from "../ReOrderGroup";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
};

const MenuAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div className="container">
      <nav className="menu" ref={scope}>
        <motion.button
          style={{
            width: "300px",
            height: "50px",
          }}
          whileTap={{ scale: 0.90 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        </motion.button>

        <ReOrderGroup />
      </nav>
    </div>
  );
};

export default MenuAnimation;
