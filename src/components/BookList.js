import React from 'react';

import Book from './Book';
import Form from './Form';

import * as actions from '../actions';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.state = this.store.getState();
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    });
    this.store.dispatch(actions.fetchBooks());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  deleteBook = (id) => {
    this.store.dispatch(actions.deleteBook(id));
  };

  addBook = (title, author, price) => {
    this.store.dispatch(actions.addBook(title, author, price));
  };

  render() {
    return (
      <ul className="book-list">
        {this.state.books.map(book => {
          return (
            <Book
              key={book.id}
              book={book}
              handleDelete={this.deleteBook}
            />
          );
        })}
        <Form addBookAction={this.addBook} />
      </ul>
    );
  }
}

export default BookList;
