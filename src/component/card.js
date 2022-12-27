import "./card.css";
import {useState} from "react"
export const Card = () => {
    const [state,setState] = useState(false);
    return (
        <div className="card" style={{ backgroundImage: 'url("http://books.google.com/books/content?id=s2rzYdI2BFcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")' }} onMouseOver={(e) => {
            e.preventDefault();
            e.currentTarget.style.transform = "scale(1.2)";
            setState(true);
        }} onMouseLeave={(e) => {
            // e.preventDefault();
            e.currentTarget.style.transform = "initial";
            setState(false);
        }}>
            <div id="title" >
                <h4 >harry potter</h4>
                <h2 style={{display:state?'block':'none'}}>{"Felicity Baker"}</h2>
                <p style={{display:state?'block':'none'}}>PAGE COUNT : {64}</p>
                <p style={{display:state?'block':'none'}}>RATING : {4}</p>
            </div>

        </div>
    )
}