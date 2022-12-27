import "./card.css";
import {useState} from "react"
export const Card = (props) => {
    const [state,setState] = useState(false);
    return (
        <div className="card" style={{ backgroundImage:props.data.imageLinks!==undefined?`url(${props.data.imageLinks.thumbnail})`:'url("http://books.google.com/books/content?id=CMPx-jksa6IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api")' }} onMouseOver={(e) => {
            e.preventDefault();
            e.currentTarget.style.transform = "scale(1.2)";
            setState(true);
        }} onMouseLeave={(e) => {
            // e.preventDefault();
            e.currentTarget.style.transform = "initial";
            setState(false);
        }} onClick={()=>{
            window.open(props.data.infoLink)
        }}>
            <div id="title" >
                <h4 >{props.data.title}</h4>
                <h2 style={{display:state?'block':'none'}}>{props.data.authors[0]}</h2>
                <p style={{display:state?'block':'none'}}>PAGE COUNT : {props.data.pageCount || 0}</p>
                <p style={{display:state?'block':'none'}}>RATING : {props.data.ratingsCount}</p>
            </div>

        </div>
    )
}