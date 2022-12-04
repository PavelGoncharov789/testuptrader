import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import { addTaskAction } from "../../store/action/actions";

import "./AddTAskModal.css";

function AddTAskModal({nameColumn, setIsOpenModal}) {
  const [nameTask, setNameTask] = useState("");
  const [detailTask, setDetailTask] = useState("");
  const [priority, setPriority] = useState();
  const dispatch = useDispatch();

  const projectID = useParams();
  let project = useSelector(state => state[projectID.project]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `${Date.now() + nameTask}`;
    const {tasks, columns} = project;
    columns[nameColumn].taskIds.push(id);
    const newTask = {...tasks, [id]:{nameTask, priority, detailTask}};
    dispatch(addTaskAction({...projectID, data: {...project, tasks: newTask}}));
    setIsOpenModal(false);
  };

  return (
    <form className="addTaskForm" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Название задачи
        <input
          id="name"
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
        />
      </label>
      <label htmlFor="priority">
        Детали задачи
        <textarea value={detailTask} onChange={(e) => setDetailTask(e.target.value)} name="detail" />
      </label>

      <label htmlFor="priority">Приоритет задачи:</label>
      <div name="priority">
        <p>
          <input type="radio" name="priority" value="Важно" onChange={(e) => setPriority(e.target.value)}/> Важно
        </p>
        <p>
          <input type="radio" name="priority" value="Средней важности" onChange={(e) => setPriority(e.target.value)}/> Средней важности
        </p>
        <p>
          <input type="radio" name="priority" value="Капец как важно"  onChange={(e) => setPriority(e.target.value)} /> Капец как важно
        </p>
      </div>
      <button className="save-button" >Сохранить</button>
    </form>
  );
}

AddTAskModal.propTypes = {
  setIsOpenModal: PropTypes.func.isRequired,
  nameColumn: PropTypes.string.isRequired,
};

export default AddTAskModal;
