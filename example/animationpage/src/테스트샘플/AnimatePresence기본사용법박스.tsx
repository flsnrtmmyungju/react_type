import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  //나타날때 움직임
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  // y20만큼 움직이면서 없어짐
  leaving: { opacity: 0, y: 20 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>click</button>
      {/* AnimatePresence 항상 보이는 상태여야하고, 무조건 안에 조건문이 있어야함 
      등장과 사라짐을 자동으로 처리해주는거*/}
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default App;
