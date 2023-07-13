import { useRecoilValue } from "recoil";
import { toDoState ,toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);//받은순서대로이름정해야함
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h1>To Dos</h1>
      <ul>
        {toDo.map((toDo) => (
           //<ToDo text={toDO.text} category={todo.category} 이런식으로 긴코드가
           //props 타입이 같고 값이 정해져 있으니까 {...toDo}이런식으로 한번에 사용가능
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h1>Doing</h1>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h1>Done</h1>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
export default ToDoList;
    