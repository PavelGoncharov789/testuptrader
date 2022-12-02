import React, { useState } from "react";

import "./AddTAskModal.css";

function AddTAskModal() {
  const [nameTask, setNameTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="addTaskForm" onSubmit={handleSubmit}>
      {/* <legend>Контактная информация</legend> */}
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
        <textarea name="detail" />
      </label>

      <label htmlFor="priority">Приоритет задачи:</label>
      <div name="priority">
        <p>
          <input type="radio" name="priority" /> Важно
        </p>
        <p>
          <input type="radio" name="priority" /> Средней важности
        </p>
        <p>
          <input type="radio" name="priority" /> Капец как важно
        </p>
      </div>
      {/* <label for="telephone">Телефон</label>
      <input id="telephone" />
      <label for="email">Email <em>*</em></label>
      <input id="email" /> */}
    </form>
  );
}

export default AddTAskModal;
