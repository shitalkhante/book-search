import { useState, react, useEffect } from "react";
import './App.css';
import { Card } from "./component/card";

function App() {
  const [state, setState] = useState({ key: "", books: [] });
  // const [books,setBooks] = useState([]);

  useEffect(() => {
    console.log(state.books)
  }, [state]);
  async function getData() {
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.key}`).then(data => {
      return data.json();
    }).then(res => {
      setState({ ...state, books: res });
      console.log(state.books);
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
          <Card />
          // state.books.map((data, idx) => {
          //   return (
          //     <div><Card />
          //       <h2>{data}</h2>
          //       {/* <Card /> */}
          //     </div>
          //   )
          // })
        }
      </div>
    </div>
  );
}

export default App;
