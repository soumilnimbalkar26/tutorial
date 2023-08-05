import React from "react";

const Book = ({ image, title, author }) => {
  //attribute, eventHandler
  //onClick, mouseOver

  const onClickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  // const { image, title, author } = props.book;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={onClickHandler}>
        button
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        complex example button
      </button>
    </article>
  );
};

export default Book;
