import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import useWindowDimensions from "../Components/useWidowDimensions";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
  //첫번째슬라이더의 사진 절반만보이게
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;
//모션을 사용할때는 타입을 `앞에써여줘야함
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  //$는 대문자 오류를 없애기위함
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  font-size: 66px;
  //첫번째마지막은 화면바깥으로 나가니까 방향바꿈
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    //hover시에만 transition
    transition: {
      delay: 0.5, //시작전 시간
      duaration: 0.3, //동작시간
      //박스에도type: "tween", 적었지만 이건따로지정을했기떄문에 또적어야함
      type: "tween",
    },
  },
};

const offset = 6;

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1; //-1은 한개는 포스터에 사용하고있어서
      //목록이 바뀔수도 있으니까 ceil반올림 floor은 반내림
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  //window의 width값을 계속 추적 리사이즈를 위해 추가
  const windowWidth = useWindowDimensions();

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* bPhoto는 아무거나이름 */}
          <Banner
            onClick={incraseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            {/* AnimatePresence:생기거나없어질때 애니메이션줄수있음 */}
            {/* initial:처음에만 애니메이션동작안함,onExitComplete:동작끝낼따함수실행*/}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                initial={{ x: windowWidth + 10 }}
                animate={{ x: 0 }}
                exit={{ x: -windowWidth - 10 }}
                transition={{ type: "tween", duration: 1 }}
                // key가 바뀌면서 애니메이션 다시실행되게끔
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      variants={boxVariants}
                      whileHover="hover"
                      initial="nonal"
                      key={movie.id}
                      transition={{ type: "tween" }}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    />
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
