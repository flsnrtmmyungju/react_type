import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  //                        value,    범위 ,    범위마다 갖고싶은 아웃풋
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  useEffect(() => {
    scale.on("change", () => console.log(scale.get()));
  }, [x]);

  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;

//^ 기본적인 useMotionValue사용
// function App() {
//   reactjs state가 아니라 react rendering cycle 발동 되지않음.변화가감지되지않아서 콘솔도안찍힘
//   const x = useMotionValue(0);
//   useEffect써야 변화감지가능
//   useEffect(() => {x.on("change", () => console.log(x.get()));}, [x]);

//   return (
//     <Wrapper>
//        메뉴얼로 x값변경하는 방법
//        <button onClick={() => x.set(200)}>cliclk me!</button>
//       <Box
//         useMotionValue랑 값 연결하기위해
//         style={{ x }}
//         drag="x"
//         드래그놓으면 원래위치로 가게
//         dragSnapToOrigin
//       />
//     </Wrapper>
//   );
// }
