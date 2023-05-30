import data from "../data.json";
import Moviebox from "../realcomponents/Moviebox.js";

function Tvseries(props:any) {
  const recievedinput = props.inp;
  const ready:any = recievedinput.toLowerCase();
  const searched = data.filter((item) => item.title.toLowerCase().includes(ready));
  const filtereddata = data.filter((item) => item.category === "TV Series");
 

  return (
    <>
      <div className="movie-container">
        <div className="movie-box">
          <div className="movie-header">
            {" "}
            <h2>{recievedinput ? "Search results: " : "TV Series"} </h2>{" "}
          </div>
          <div className="movie-content">

         {recievedinput ? searched.map((item: any) => (
              <Moviebox
                name={item.title}
                year={item.year}
                restriction={item.rating}
                src={item.thumbnail.regular.medium}
                bookmark={item.isBookmarked}
                category={item.category}
              />
            )):  filtereddata.map((item: any) => (
              <Moviebox
                name={item.title}
                year={item.year}
                restriction={item.rating}
                src={item.thumbnail.regular.medium}
                bookmark={item.isBookmarked}
                category={item.category}
              />
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default Tvseries;
