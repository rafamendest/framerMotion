import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const [animation, setAnimation] = useState({
    marginLeft: 0,
    scale: 1,
    opacity: 1,
  });

  const [loading, setLoading] = useState(false);

  const executeAnimation = () => {
    setLoading(true);
    setAnimation({ marginLeft: 500, scale: 0, opacity: 0.5 });
  };
  return (
    <>
      <div style={{ display: "inline-grid", position: "relative" }}>
        <motion.div
          style={{
            margin: "200px auto",
            marginTop: "200px",
            display: "inline-grid",
            gap: "10px",
          }}
          initial={{ marginLeft: -300, opacity: 0, scale: 1 }}
          animate={animation}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button variant="contained" onClick={executeAnimation}>
              Submit
            </Button>
          </motion.div>
        </motion.div>
        {loading && (
          <motion.div style={{
            display: "inline",
            position: "absolute",
            top: "240px",
            left: "95px",
          }}
          initial={{ marginLeft: -500, opacity: 0, scale: 1 }}
          animate={{
            marginLeft: 250,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          >
          <CircularProgress />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Login;
