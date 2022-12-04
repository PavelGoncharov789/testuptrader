import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Column from "../../components/Column/Column";

import "./TaskPage.css";

function TaskPage() {
  const params = useParams();
  const state = useSelector(state => state);
  const data = state[params.project];

  useEffect(() => {
    return () => localStorage.setItem('project', JSON.stringify(state))
  },[])

  const [boards, setBoards] = useState(data);
  const [table, setTable] = useState([]);

  useEffect(() => {
    const arr = [];
    boards.columnOrder.map((columnId) => {
      const actualColumn = boards.columns[columnId];
      const actualTasks = actualColumn.taskIds;
      arr.push({ actualColumn, actualTasks });
    });
    setTable(arr);
    localStorage.setItem('project', JSON.stringify({...state, [`${params.project}`]: boards}))
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
        <DragDropContext onDragEnd={handleDragEnd}>
        {table.map(({ actualColumn, actualTasks }) => (
          <Column
            key={actualColumn.id}
            column={actualColumn}
            tasksId={actualTasks}
          />
        ))}
      </DragDropContext>
    </div>
}

export default TaskPage;
