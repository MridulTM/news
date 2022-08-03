import React, { useState } from "react";
import { Route,Routes } from "react-router-dom";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        " https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=362272e2145749f0b4fa8f2603d7e130"
      )
      .then((response) => {
        //console.log(response);
        setData(response.data.articles);
      });
  };
  const contents = () => {
    axios
      .get(
        " https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=362272e2145749f0b4fa8f2603d7e130"
      )
      .then((response) => {
        //console.log(response);
        setData(response.data.content);
      });
  };
  return (
    <>

    <Routes >
      <Route exact path="/" component={App} />
    </Routes>

    
      <div className="container my-3">
      <button className='btn btn-primary' onClick={getNews}> Fetch News </button>
          
      </div>
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <button className='btn btn-primary' onClick={contents}> Main News </button>
                   <p className="card-text">{value.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
