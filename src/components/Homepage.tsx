import data from "../data.json";
import Moviebox from "../realcomponents/Moviebox.js";
import Trendingbox from "../realcomponents/Trendingbox.js";

function Homepage(props:any) {


    const recievedinput = props.inp;
    const ready:any = recievedinput.toLowerCase();
 
 
    const searched = data.filter((item) => item.title.toLowerCase().includes(ready));
  
  const datatrending = data.filter((item) => item.isTrending);
  const dataRecomended = data.filter((item) => item.rating === "E");

  return (
    <>
      <div className="homepage">
        <div className="trending">
          <div className="trending-box">
            <div className="trending-name">
              <h2>Trending</h2>
            </div>

            <div className="trending-content">
              {datatrending.map((item: any) => (
                <Trendingbox
                  name={item.title}
                  year={item.year}
                  rating={item.rating}
                  src={item.thumbnail.regular.medium}
                  category={item.category}
                  
                />
              ))}
            </div>
          </div>
        </div>
        <div className="recomended">
          <div className="recomended-box">
            <div className="recomended-name">
              <h2>{recievedinput ? "Search results: " : "Recomended for you" } </h2>
            </div>
            <div className="recomended-content">
         
            {recievedinput ? searched.map((item: any) => (
              <Moviebox
                name={item.title}
                year={item.year}
                restriction={item.rating}
                src={item.thumbnail.regular.medium}
                bookmark={item.isBookmarked}
                category={item.category}
              />
            )):  dataRecomended.map((item: any) => (
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
      </div>
    </>
  );
}

export default Homepage;
