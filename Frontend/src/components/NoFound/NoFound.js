import React from "react";
import "../../styles/NoFound.css";
import SearchIcons from "../../assets/search.png";

function NoFound() {
  return (
    <div className="contentNoFound">
      <img src={SearchIcons} alt="SearchIcon" />
      <div className="contentText">
        <h1>No hay publicaciones que coincidan con tu búsqueda.</h1>
        <li>Revisa la ortografía de la palabra.</li> <br />
        <li>Utiliza palabras más genéricas o menos palabras.</li> <br />
        <li>Asegúrate que la palabra esté bien escrita</li>
      </div>
    </div>
  );
}

export default NoFound;
