import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {


  if (show) {
    return (
      <div className="ChangeAlert-bar">
        <p className="ChangeAlert-msg">There has some changes:</p>
        <button className="ChangeAlert-btn" onClick={toggleShow}>
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
