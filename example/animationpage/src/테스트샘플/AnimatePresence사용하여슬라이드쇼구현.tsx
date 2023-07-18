import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  //이름이 같을필요는 없다
  // entry: (back: boolean) => {
  //   return {
  //     x: 500,
  //     opacity: 0,
  //     scale: 0,
  //   };
  // },
  //아래와 같음
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    //rotateX: 180,
    transition: { duration: 0.3 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = async () => {
    await setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = async () => {
    await setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      {/* mode="wait" 한개의 컴포넌트가 exit가된이후에 다음것이 동작(기존:exitBeforeEnter) */}
      <AnimatePresence custom={back} mode="wait">
        {/* 
        기존에는  {[1, 2].map((i) => 이런식으로 생성후 i로 key를줫지만
        key를없애고 visible를 주면(컴포넌트의 키가바뀌면) 
        리엑트는 새로운 거라고 생각하고 애니매이션 전부를 실행함(리렌더) 
        */}
        <Box
          //custom  = variants에게 데이터를 보내줄수있는 프로퍼티
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}
export default App;

// ^얘를 위처럼 바꿈
// <AnimatePresence>
//   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
//     i === visible ? (
//       <Box
//         variants={box}
//         initial="invisible"
//         animate="visible"
//         exit="exit"
//         key={i}
//       >
//         {i}
//       </Box>
//     ) : null
//   )}
// </AnimatePresence>;
