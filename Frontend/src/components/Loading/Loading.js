import React from "react";
import "../../styles/Loading.css";

function Loading() {
  return (
    <div className="contentloading">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="Loading"
      />
      <h1>Cargando tu busqueda</h1>
    </div>
  );
}

export default Loading;
