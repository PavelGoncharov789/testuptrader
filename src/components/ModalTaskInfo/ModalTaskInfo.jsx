import React, {useState} from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./ModalTaskInfo.css";
import PortalModal from "../AddPortal/PortalModal";

function ModalTaskInfo ({cardId}) {
  const projectID = useParams();
  const {tasks} = useSelector(state => state[projectID.project]);
  const taskData = tasks[cardId];
  const [isInput, setISInput] = useState(false);
  const [text, setText] = useState();
  const [comment, setComment] = useState([]);
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  
  const addComment = () => {
    setComment([...comment, text]);
    console.log(text);
    setISInput(false)
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
        <div>
          {comment.map(element => {
            return <div className="comment-text-container">
              <p>{element}</p>
              <div className="comment-text-container-answer" id="portal">
               <PortalModal isOpen={isOpenPortal} setIsOpen={setIsOpenPortal} />
                <span onClick={() => setIsOpenPortal(true)} className="comment-text-container-button">Ответить</span>
                {isOpenPortal? <span className="comment-text-container-button-close" onClick={() => setIsOpenPortal(false)}>Отмена</span>: null}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

ModalTaskInfo.propTypes = {
  cardId: PropTypes.string.isRequired,
};


export default ModalTaskInfo