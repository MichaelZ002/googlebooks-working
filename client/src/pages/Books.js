import React, { useState, useEffect } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import BookInfo from '../components/BookInfo';

const Books = ({setSavedBooks}) => {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
      event.preventDefault();
        API.getBooks(searchQuery)
          .then(res => {
            setBooks(res.data?.items);
          });
    };
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                  <Jumbotron>
                      <h1>Google Books</h1>
                  </Jumbotron>
                  <form>
                      <Input
                          onChange={(event) => setSearchQuery(event.target.value)}
                          name="title"
                          placeholder="Search book"
                      />
                      <FormBtn
                        type="submit"
                        onClick={handleFormSubmit}
                      >
                        Search
                      </FormBtn>
                  </form>
                </Col>
                {books && books.map((value) => {
                  return (
                    <BookInfo
                      bookData={value}
                      key={value.id}
                      setSavedBooks={setSavedBooks}
                    />
                  )
                })}
            </Row>
        </Container>
    );
}


export default Books;
