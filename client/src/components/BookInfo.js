import React from 'react';
import API from "../utils/API";

const BookInfo = ({bookData, setSavedBooks, isSaved}) => {
  const saveBookInfo = () => {
    API.saveBook(bookData)
      .then(res => setSavedBooks(res));
  }
  const removeFromSaved = () => {
    API.deleteBook(bookData.id)
      .then((res) => setSavedBooks(res));
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
      {isSaved ?
        <button onClick={() => removeFromSaved()}>
          Save
        </button>
        :
        <button onClick={() => saveBookInfo()}>
          Save
        </button>
      }
    </div>
  )
}

export default BookInfo;