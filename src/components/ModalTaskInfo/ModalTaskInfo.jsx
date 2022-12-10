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
  const [comment, setComment] = useState({});
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  
  const addComment = () => {
    setComment({...comment, [Date.now()]: {value: text}});
    setISInput(false)
  };

  const replytToComment = (id) => {
    
    setComment({...comment, [id]: {...comment[id], text}});
    console.log("comment", comment.id);
    // setIsOpenPortal(false);
  };

  console.log(comment);

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
        : <button className="comment-button" onClick={() => setISInput(true)}>Оставить комментарий</button>}
        <div>
          {Object.entries(comment).map(element => {
            return <div key={element[0]} className="comment-text-container">
              <p>{element[1].value}</p>
              <div className="comment-text-container-answer" id="portal">
               {isOpenPortal == element[0] ? <PortalModal />: null}
                <span onClick={() => {isOpenPortal ? replytToComment(element[0]): setIsOpenPortal(element[0]) }} className="comment-text-container-button">Ответить</span>
                {isOpenPortal == element[0]? <span className="comment-text-container-button-close" onClick={() => setIsOpenPortal(false)}>Отмена</span>: null}
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