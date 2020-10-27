import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BookInfo from '../components/BookInfo';

const Saved = ({savedBooks, setSavedBooks}) => {
  useEffect(() => {
    // load your saved books when you land on the page
    API.getSavedBooks()
      .then(res => {
        console.log({res})
        if (res.isArray()) {
          setSavedBooks(res);

        }
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <Jumbotron>
        <h1>Saved Books</h1>
      </Jumbotron>
      {savedBooks && savedBooks.map((value) => {
        return (
          <BookInfo
            bookData={value}
            isSaved={true}
            key={value.id}
            setSavedBooks={setSavedBooks}
          />
        );
      })}
    </div>
  );
}

export default Saved;
