import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ModalTask from "../modal/ModalTask";

import "./Column.css";

function Column({ column, tasksId }) {
  const[isOpenModal, setIsOpenModal] = useState(false);
  const params = useParams();
  const data = useSelector(state => state[params.project].tasks);
  const [cardID, setCardId] = useState();

  return (
    <div className="column">
       {isOpenModal? <ModalTask setIsOpenModal={setIsOpenModal} nameColumn = {column.id} cardId = {cardID} setCardId = {setCardId}/> : null}
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
            {tasksId.length
              ? tasksId.map(( id , index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          onClick={() => {setIsOpenModal(true), setCardId(id)}}
                          className="card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{data[id].priority}</p>
                          <p>{data[id].detailTask}</p>
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

Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    taskIds: PropTypes.array,
  }).isRequired,
  tasksId: PropTypes.array,
};

export default Column;
