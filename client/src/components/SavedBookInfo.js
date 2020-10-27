import React from 'react';
import API from "../utils/API";

const BookInfo = ({bookData, setSavedBooks}) => {
 
  const removeFromSaved = () => {
    API.deleteBook(bookData.id)
      .then((res) => setSavedBooks(res));
  }
  return (
    <div key={bookData.id}>
      <h3>{bookData.title}</h3><br/>
      Written by {bookData.authors?.map((author) => {
        return (
          <div key={author}>
            {author}
          </div>
        )
      })}
      <div>
        {bookData.description}
      </div>
      
        <button onClick={() => removeFromSaved()}>
          Delete
        </button>
       
    </div>
  )
}

export default BookInfo;