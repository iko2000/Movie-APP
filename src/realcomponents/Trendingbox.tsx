import "./cinema.css";




function Trendingbox(props:any) {




    return (
        <>
        <div className="trend">
         <img className="trend-img" src={props.src}/>
         <div className="trend-box">
             <div className="trend-box-first"><p>{props.year}</p><p>{props.category}</p><p>{props.rating}</p></div>
             <div className="trend-box-second"><p>{props.name}</p></div>

         </div>
        </div>
        </>
    )
}


export default Trendingbox;