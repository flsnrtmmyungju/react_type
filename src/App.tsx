import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (destination?.droppableId === source.droppableId) {
      setTodos((allboard) => {
        const boardCopy = [...allboard[source.droppableId]];
        boardCopy.splice(source?.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        //아래코드는 allboard값을 다 가져오고 수정된값을 추가하지만
        //객체 안에서 키 값이 중복된 프로퍼티는 마지막에 선언된 프로퍼티를 사용해서 갠춘.
        return {
          ...allboard,
          // ES6: Computed property name
          // key값에 변수값을 넣으려면 대괄호[]필요
          [source.droppableId]: boardCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;
