import React from "react";
import PropTypes from 'prop-types';

import "./PortalModal.css"

function PortalModal ({setText}) {
  return  <textarea className="portal-modal" onChange={(e) => setText(e.target.value)}/>
}

PortalModal.propTypes = {
  setText: PropTypes.func.isRequired,
};

export default PortalModal;