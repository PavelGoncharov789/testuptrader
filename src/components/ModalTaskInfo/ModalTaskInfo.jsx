import React, {useState} from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./ModalTaskInfo.css";

function ModalTaskInfo ({cardId}) {
  const projectID = useParams();
  const {tasks} = useSelector(state => state[projectID.project]);
  const taskData = tasks[cardId];
  const [isInput, setISInput] = useState(false);
  const [text, setText] = useState();
  // const [comment, setComment] = useState(null);
  
  const addComment = () => {
    console.log(text);
  };

  return (
    <div className="modaltaskinfo-container">
      <h3>{taskData.nameTask}</h3>
      <p>{taskData.detailTask}</p>
      <div className="comment-container">
        <div className="comment-line"></div>
        
        {isInput?
          <div>
            <textarea className="comment-input" onChange={(e) => setText(e.target.value)}/>
            <button className="comment-button" onClick={() => {setText(),setISInput(false)}}>Отмена</button>
            <button className="comment-button" onClick={() => addComment()} >Комментировать</button>
          </div>
        : <button className="comment-button" onClick={() => setISInput(true)}>Оставаить комментарий</button>}
        <div></div>
      </div>
    </div>
  )
}

ModalTaskInfo.propTypes = {
  cardId: PropTypes.string.isRequired,
};


export default ModalTaskInfo