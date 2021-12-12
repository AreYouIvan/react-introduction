import React from "react";
import { useStorageListener } from "./ChangeAlertUseStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);

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


export { ChangeAlert };
