import { useState } from "react";
import "./App.css";
import Paginator from "./components/Paginator";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <motion.div
        key={page}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 25,
            stiffness: 800,
          }
        }}
        style={{ zIndex: 1 }}
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
