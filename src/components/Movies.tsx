import Moviebox from "../realcomponents/Moviebox.js";
import bookmarkimg from "../assets/icon-bookmark-empty.svg";
import img from '../assets/thumbnails/1998/regular/medium.jpg'

import data from "../data.json";


function Movies(props:any) {
   const recievedinput = props.inp;
   const ready:any = recievedinput.toLowerCase();
   const book = props.arr;
    


   const searched = data.filter((item) => item.title.toLowerCase().includes(ready));
  const datafilter = data.filter((item) => item.category === "Movie");

  return (
    <>
      <div className="movie-container">
        <div className="movie-box">
          <div className="movie-header">
            {" "}
            <h2>{recievedinput ? "Search results:" : "Movies"}</h2>{" "}
          </div>
          <div className="movie-content">

            {recievedinput ? searched.map((item: any) => (
              <Moviebox
                name={item.title}
                year={item.year}
                restriction={item.rating}
                src={item.thumbnail.regular.medium}
                category={item.category}
              />
            )):  datafilter.map((item: any) => (
              <Moviebox
                name={item.title}
                year={item.year}
                restriction={item.rating}
                src={item.thumbnail.regular.medium}
                bookmark={item.isBookmarked}
                category={item.category}
                 fn={() => {
                  if(book.includes(item)) {
                    const index = book.indexOf(item);
                    book.splice(index, 1);
                    console.log(book);
                    return;
                  } 
                  if(!book.includes(item)){
                    book.push(item);
                    console.log(book);
                    return;
                  }
                
                 }}
              />
            )) }
          
              

          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
