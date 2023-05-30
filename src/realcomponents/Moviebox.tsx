import "./cinema.css";
import img from "../assets/icon-category-movie.svg";
import img2 from "../assets/icon-category-tv.svg";
import { useState } from "react";
import bookmarkimg from "../assets/icon-bookmark-empty.svg";
import bookmarkfull from "../assets/icon-bookmark-full.svg";

function Moviebox(props: any) {
  const [isbookmark, setIsbookmark] = useState(false);

  

  return (
    <>
      <div className="cinema-container">
        <div className="cinema">
          <img className="cinema-img" src={props.src} />
          <div className="cinema-bookmark">
            <img
              onClick={() => {
                setIsbookmark(!isbookmark);
                props.fn();
              }}
              src={props.bookmark ? bookmarkfull : bookmarkimg}
            />
          </div>
        </div>
        <div className="cinema-description">
          <div className="cinema-txt">
            <div>{props.year}</div>
            <div>
              <img src={props.category === 'Movie' ? img : img2}  />
              {props.category}
            </div>
            <div>{props.restriction}</div>
          </div>
          <div className="cinema-name">{props.name}</div>
        </div>
      </div>
    </>
  );
}

export default Moviebox;
