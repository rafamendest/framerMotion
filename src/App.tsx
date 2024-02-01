import { useEffect, useState } from "react";
import "./App.css";
import Paginator from "./components/Paginator";
import Button from "@mui/material/Button";
import { motion, useAnimationControls } from "framer-motion";

function App() {
  const [page, setPage] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ rotate: 360 * page, scale: 1 });
    console.log('teste')
  }, [page])

  return (
    <div className="App">
      <motion.div
        initial={{ scale: 0 }}
        animate={controls}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        <Paginator page={page} />
      </motion.div>
      <div className="buttons">
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          onClick={() => setPage(page - 1)}
        >
          Back Framer
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next Framer
        </Button>
      </div>
    </div>
  );
}

export default App;
