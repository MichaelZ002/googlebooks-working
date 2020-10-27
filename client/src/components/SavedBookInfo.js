import React from 'react';
import API from "../utils/API";

const BookInfo = ({bookData, setSavedBooks}) => {
 
  const removeFromSaved = (e) => {
    e.preventDefault
    API.deleteBook(bookData._id)
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
      
        <button onClick={(e) => removeFromSaved(e)}>
          Delete
        </button>
       
    </div>
  )
}

export default BookInfo;