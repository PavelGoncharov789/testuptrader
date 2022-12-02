import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Column from "../../components/Column/Column";
import ModalTask from "../../components/modal/ModalTask";

import "./TaskPage.css";

function TaskPage() {
  const params = useParams();
  const data = useSelector(state => state[params.project]);
  console.log("1",data);

  const [boards, setBoards] = useState(data);
  const [table, setTable] = useState([]);
  const[isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const arr = [];
    boards.columnOrder.map((columnId) => {
      const actualColumn = boards.columns[columnId];
      const actualTasks = actualColumn.taskIds.map(
        (taskId) => boards.tasks[taskId]
      );
      arr.push({ actualColumn, actualTasks });
    });
    setTable(arr);
  }, [boards]);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!result.destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = boards.columns[source.droppableId];
    const finish = boards.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...boards,
        columns: {
          ...boards.columns,
          [newColumn.id]: newColumn,
        },
      };
      setBoards(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...boards,
      columns: {
        ...boards.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setBoards(newState);
  };

  return <div className="board">
    {isOpenModal? <ModalTask setIsOpenModal={setIsOpenModal}/> : null}
        <DragDropContext onDragEnd={handleDragEnd}>
        {table.map(({ actualColumn, actualTasks }) => (
          <Column
            key={actualColumn.id}
            column={actualColumn}
            tasks={actualTasks}
            setIsOpenModal={setIsOpenModal}
          />
        ))}
      </DragDropContext>
    </div>
}

export default TaskPage;
