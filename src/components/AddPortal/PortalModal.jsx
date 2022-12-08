import React from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";

import "./PortalModal.css"

function PortalModal ({isOpen, setIsOpen}) {
  if (!isOpen) return null
  return createPortal (    
    <div className="portal-modal">
      <span>message</span>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>,
    document.getElementById("portal"))
}

PortalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default PortalModal;