import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
function App() {
  const onDragEnd = () => {};
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="one">
            {() => (
              <ul>
                <Draggable draggableId="first" index={0}>
                  {() => <li>hello</li>}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                  {() => <li>bye</li>}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
}
export default App;
