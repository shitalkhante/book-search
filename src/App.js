import { useState } from "react";
import './App.css';
import { Card } from "./component/card";

function App() {
  const [state, setState] = useState({ key: "", books: [] });

  async function getData() {
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.key}`).then(data => {
      return data.json();
    }).then(res => {
      setState({ ...state, books: res.items });
    })
  }

  return (
    <div className="App">
      <header>
        <h1>BOOK SEARCH</h1>
      </header>
      <div className="main-body">
        <input type={"search"} placeholder="Search for a book" onInput={(e) => setState({ ...state, key: e.target.value })} />
        <button onClick={() => getData()}>search</button>
      </div>
      <div>
        {state.books.length > 0 &&
        <div id="result">
          {state.books.map((data, idx) => {
            return (
              <Card data={data.volumeInfo}/>
            )
          })}
          </div>
        }
        
      </div>
    </div>
  );
}

export default App;
