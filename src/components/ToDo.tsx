import { useRecoilValue, useSetRecoilState } from "recoil";
import {  Categories, IToDo, toDoState } from "../atoms";

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
      const newToDo = {text,id, category:name as any}
      return [...oldToDos.slice(0,tagetIndex),newToDo,...oldToDos.slice(tagetIndex+1)]
    })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !==Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;