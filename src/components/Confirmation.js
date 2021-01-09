import React from "react";

const Confirmation = ({ id, message, handleClick }) => {
  return (
    <div id={`remove-${id}`} uk-modal="true">
      <div className="uk-modal-dialog uk-modal-body">
        <p>{message}</p>
        <p className="uk-text-right">
          <button
            className="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Cancelar
          </button>
          <button
            onClick={() => handleClick(id)}
            className="uk-button uk-button-danger"
            type="button"
          >
            Borrar
          </button>
        </p>
      </div>
    </div>
  );
};

export default Confirmation;