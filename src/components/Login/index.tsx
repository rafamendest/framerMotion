import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      style={{
        margin: "200px auto",
        marginTop: "200px",
        display: "inline-grid",
        gap: "10px",
      }}
      initial={{ marginLeft: -300, opacity: 0, scale: 1 }}
      animate={{ marginLeft: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <motion.div whileTap={{ scale: 0.9 }}>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
      </motion.div>
      <motion.div whileTap={{ scale: 0.9 }}>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </motion.div>
    </motion.div>
  );
};

export default Login;
