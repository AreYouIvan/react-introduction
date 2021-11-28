import React from "react";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TodoContext } from "../TodoContext";

// import "./TodosLoading.css"

function TodosLoading() {
  React.useContext(TodoContext);
  return (
    <div>
      <center>
        <p>Loading...</p>
      </center>
    </div>
    // <div className="LoadingTodo-container">
    //   <span className="LoadingTodo-completeIcon"></span>
    //   <p className="LoadingTodo-text"></p>
    //   <span className="LoadingTodo-deleteIcon"></span>
    // </div>
  );
}

export { TodosLoading };
