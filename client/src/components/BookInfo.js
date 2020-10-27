import React from 'react';
import API from "../utils/API";

const BookInfo = ({bookData, setSavedBooks}) => {
  const saveBookInfo = () => {
    API.saveBook(bookData)
      .then(res => setSavedBooks(res));
  }
 
  return (
    <div key={bookData.id}>
      <h3>{bookData.volumeInfo?.title}</h3><br/>
      Written by {bookData.volumeInfo?.authors?.map((author) => {
        return (
          <div key={author}>
            {author}
          </div>
        )
      })}
      <div>
        {bookData.volumeInfo?.description}
      </div>
     
        <button onClick={() => saveBookInfo()}>
          Save
        </button>
    
    </div>
  )
}

export default BookInfo;