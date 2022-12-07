import React from "react";
import PropTypes from 'prop-types';

import CloseSVG from "../../svg/CloseSVG";
import AddTAskModal from "../Addtaskmodal/AddTAskModal";

import "./ModalTask.css";
import ModalTaskInfo from "../ModalTaskInfo/ModalTaskInfo";

function ModalTask({ setIsOpenModal, nameColumn, cardId, setCardId }) {
  console.log(cardId);
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button
            onClick={() => {setIsOpenModal(false), setCardId()}}
            className="close-button"
          >
            <CloseSVG />
          </button>
        </div>
        {cardId ?
        <ModalTaskInfo cardId={cardId} />
        :<AddTAskModal nameColumn={nameColumn} setIsOpenModal={setIsOpenModal} />}
      </div>
    </div>
  );
}

ModalTask.propTypes = {
  setIsOpenModal: PropTypes.func.isRequired,
  nameColumn: PropTypes.string.isRequired,
  cardId: PropTypes.string,
  setCardId: PropTypes.func.isRequired,
};

export default ModalTask;

