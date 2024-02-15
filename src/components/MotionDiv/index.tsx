import { motion } from "framer-motion";

const MotionDiv = () => {
  const variants = {
    variantA: { scale: 1 },
    variantB: { scale: 1.25 },
  };

  // spring: Cria uma animação elástica e fluida, simulando o comportamento de uma mola física.

  // tween: Realiza uma animação suave entre os estados inicial e final, utilizando um algoritmo de interpolação para calcular os valores intermediários.

  // keyframes: Define uma série de valores de estado intermediários para a animação, permitindo criar uma animação com vários pontos-chave.


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
          backgroundColor: "rgba(112,219,147,0.5)",
          marginTop: "5rem",
        }}
        variants={variants}
        initial="variantA"
        whileHover="variantB"
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      />
    </>
  );
};

export default MotionDiv;
