import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";
import logoMeLi from "../../assets/Logo_ML@2x.png.png.png";
import loop from "../../assets/ic_Search@2x.png.png.png";

function Header({ search, setSearch, setData, setLoader, setError }) {
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    navigate("/items?search=" + e.target.value);
  };

  const handleSubmitSearch = async () => {
    if (search !== "") {
      try {
        let res = await fetch(`http://localhost:7000/api/items?q=${search}`);
        setLoader(true);
        const data = await res.json();
        if (data.length === 0) {
          setError(false);
          setData([]);
        } else {
          setData(data);

          setError(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    } else {
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
          <button onClick={handleSubmitSearch}>
            <img src={loop} alt="iconloop" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
