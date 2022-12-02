import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import "./Column.css";

function Column({ column, tasks, setIsOpenModal }) {

  return (
    <div className="column">
      <div className="column-header">
        <h3>{column.title}</h3>
        <button className="add-task" onClick={() => setIsOpenModal(true)}>
          Добавить задачу
        </button>
      </div>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul
            className="taskList"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.length
              ? tasks.map(({ id, content }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          onClick={() => setIsOpenModal(true)}
                          className="card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{content}</p>
                        </div>
                      )}
                    </Draggable>
                  );
                })
              : null}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
