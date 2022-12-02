import React, { useState } from 'react';
import { addProjectAction } from '../../store/action/actions';
import { useDispatch } from 'react-redux';

import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const addProject = () => {
    if(text.length) {
      dispatch(addProjectAction(text)) 
    }
  };

  return (
    <div className="header">
      <input className='header-input' placeholder='Введите текст' onChange={(e) => setText(e.target.value)}></input>
      <button className="addButton" onClick={() => addProject()}>Дабваить проект</button>
    </div>
  );
}

export default Header;
