import "../realcomponents/cinema.css";
import data from "../data.json";
import Moviebox from "../realcomponents/Moviebox.js";

function Bookmark(props: any) {
  const recievedinput = props.inp;
  const ready: any = recievedinput.toLowerCase();
  const searched = data.filter((item) => item.title.toLowerCase().includes(ready));
  const bookmark = data.filter((item) => item.isBookmarked);
  const bookmarkMovies = bookmark.filter((item) => item.category === "Movie");
  const bookmarkTv = bookmark.filter((item) => item.category === "TV Series");
  console.log(bookmarkMovies, bookmarkTv, bookmark);

  return (
    <>
      <div className="bookmark-page">
        <div className="bookmark-movies">
          <div className="bookmark-head">
            <h2>{recievedinput ? "Search Results: " : "Bookmarked Movies"}</h2>{" "}
          </div>
          <div className="bookmark-content">
            {recievedinput
              ? searched.map((item: any) => (
                  <Moviebox
                    name={item.title}
                    year={item.year}
                    restriction={item.rating}
                    src={item.thumbnail.regular.medium}
                    bookmark={item.isBookmarked}
                    category={item.category}
                  />
                ))
              : bookmarkMovies.map((item: any) => (
                  <Moviebox
                    name={item.title}
                    year={item.year}
                    restriction={item.rating}
                    src={item.thumbnail.regular.medium}
                    bookmark={item.isBookmarked}
                    category={item.category}
                  />
                ))}
          </div>
        </div>

        <div className="bookmark-tv">
          <div className="bookmark-head">
            <h2>Bookmarked Tv Series</h2>{" "}
          </div>
          <div className="bookmark-content">
            {bookmarkTv.map((item: any) => (
              <Moviebox
                name={item.title}
                year={item.year}
                restriction={item.rating}
                src={item.thumbnail.regular.medium}
                category={item.category}
                bookmark={item.isBookmarked}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmark;
