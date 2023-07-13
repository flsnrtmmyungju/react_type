import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
           //<ToDo text={toDO.text} category={todo.category} 이런식으로 긴코드가
           //props 타입이 같고 값이 정해져 있으니까 {...toDo}이런식으로 한번에 사용가능
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      </div>
  );
}
export default ToDoList;
    