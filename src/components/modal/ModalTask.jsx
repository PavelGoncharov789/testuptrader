import React from "react";
import PropTypes from 'prop-types';

import CloseSVG from "../../svg/CloseSVG";
import AddTAskModal from "../Addtaskmodal/AddTAskModal";

import "./ModalTask.css";

function ModalTask({ setIsOpenModal, nameColumn }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">asdfadfhsdfhsfghsfr</h3>
          <button
            onClick={() => setIsOpenModal(false)}
            className="close-button"
          >
            <CloseSVG />
          </button>
        </div>
        <AddTAskModal nameColumn={nameColumn} setIsOpenModal={setIsOpenModal} />
      </div>
    </div>
  );
}

ModalTask.propTypes = {
  setIsOpenModal: PropTypes.func.isRequired,
  nameColumn: PropTypes.string.isRequired,
};

export default ModalTask;

