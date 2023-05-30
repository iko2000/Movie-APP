import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import Movies from "./components/Movies.js";
import Tvseries from "./components/Tvseries.js";
import Bookmark from "./components/Bookmark.js";
import homenavpic from "./assets/icon-nav-home.svg";
import movienavpic from "./assets/icon-nav-movies.svg";
import bookmarknavpic from "./assets/icon-nav-bookmark.svg";
import tvnavpic from "./assets/icon-nav-tv-series.svg";
import logo from "./assets/logo.svg";
import data from "./data.json";
import searchicon from "./assets/icon-search.svg";




function App() {
   const [isactive, setIsactive] = useState(1);
  const [input, setInput] = useState<any>('');
  const arr = data.filter((item) => item.isBookmarked);
  console.log(arr);
  return (
    <>
      <div className="App">
        <header>
          <div className="header">
            <Link to="/">
              <img onClick={() => {
                setIsactive(1);
              }} className={isactive === 1 ? 'active' : ''} id="logoimg" src={logo} />
            </Link>
            <Link to="/">
              <img onClick={() => {
                setIsactive(2);
              }} className={isactive === 2 ? 'active' : ''} src={homenavpic} />
            </Link>
            <Link onClick={() => {
                setIsactive(3);
              }}  to="/movies">
              <img  className={isactive === 3 ? 'active' : ''}src={movienavpic} />
            </Link>
            <Link  to="/tvseries">
              <img onClick={() => {
                setIsactive(4);
              }} className={isactive === 4 ? 'active' : ''} src={tvnavpic} />
            </Link>
            <Link to="/bookmark">
              <img onClick={() => {
                setIsactive(5);
              }} className={isactive === 5 ? 'active' : ''} src={bookmarknavpic} />
            </Link>
          </div>
        </header>
        <div className="body">
          <div className="searchbox">
            <div className="searchbox-div">
              <img src={searchicon} />
              <input placeholder="Search for movies or TV series"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>
          <div className="content">
            <Routes>
              <Route path="/"  element={<Homepage arr={arr} inp={input} />} />
              <Route path="/movies" element={<Movies arr={arr} inp={input}  />} />
              <Route path="/tvseries" element={<Tvseries arr={arr} inp={input}  />} />
              <Route path="/bookmark" element={<Bookmark arr={arr} inp={input}  />} />
            </Routes>
          </div>
        </div>
     
      </div>
    
    </>
  );
}

export default App;
