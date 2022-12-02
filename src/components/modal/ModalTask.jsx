import React from "react";

import CloseSVG from "../../svg/CloseSVG";
import AddTAskModal from "../Addtaskmodal/AddTAskModal";

import "./ModalTask.css";

function ModalTask({ setIsOpenModal }) {
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
        <AddTAskModal />
      </div>
    </div>
  );
}

export default ModalTask;
