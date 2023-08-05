import React from "react";
import ReactDOM from "react-dom";
import { books } from "./Booklist";
import Book from "./Book";
import { greeting } from "./testing/testing";

import "./index.css";

//here we render components
function BookList() {
  console.log(greeting);
  return (
    <section className="BookList">
      {books.map((book) => {
        // const { title, author, image } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//component

ReactDOM.render(<BookList />, document.getElementById("root"));
