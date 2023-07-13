import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //const event.currentTarget.name
    const {
      currentTarget: { name },
    } = event;
    setToDos(oldToDos =>{
      const tagetIndex = oldToDos.findIndex(toDo =>toDo.id=== id )
      const oldToDo = oldToDos[tagetIndex]
      const newToDo = {text,id, category:name}
      console.log("oldToDo",oldToDo,"newToDo",newToDo)
      return oldToDos
    })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;