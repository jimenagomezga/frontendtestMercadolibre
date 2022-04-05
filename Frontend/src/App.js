import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header/Header";
import Results from "../src/components/Results/Results";
import ResultsProductDetails from "../src/components/Results/ResultsProductDetails";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const setResultsData = (data) => {
    setData(data);
  };

  const setSearchResult = (data) => {
    setSearch(data);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  setSearch={setSearchResult}
                  search={search}
                  setData={setResultsData}
                  setLoader={setLoader}
                  setError={setError}
                />
                <Outlet />
              </>
            }
          >
            <Route path="items" element={<Outlet />}>
              <Route
                path=":itemid"
                element={
                  <ResultsProductDetails
                    data={data}
                    loader={loader}
                    setLoader={setLoader}
                  />
                }
              />
              <Route
                index
                element={<Results data={data} loader={loader} error={error} />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
