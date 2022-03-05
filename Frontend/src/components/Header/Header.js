import React from "react";
import "../../styles/Header.css";
import logoMeLi from "../../assets/Logo_ML@2x.png.png.png";
import loop from "../../assets/ic_Search@2x.png.png.png";

function Header({ search, setSearch, setData, data }) {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search !== "") {
      setData([]);
    }
  };

  return (
    <div>
      <header>
        <img src={logoMeLi} alt="logo" />
        <div className="contentInput">
          <input
            type="text"
            value={search}
            placeholder="Nunca dejes de buscar"
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>
            <img src={loop} alt="iconloop" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
