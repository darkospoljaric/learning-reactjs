const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECIEVE_BOOKS' :
      return {
        ...state,
        books : action.books
      };
    case 'DELETE_BOOK' :
      return {
        ...state,
        books : state.books.filter(book =>
          book.id !== action.bookId
        )
      };
    case 'ADD_BOOK' :
      return {
        ...state,
        books : state.books.concat(action.book)
      }
    case 'EDIT_BOOK' :
      return {
        ...state,
        books :
          state.books.filter(book => book.id < action.id)
          .concat(Object.assign({}, state.books.filter(book => book.id === action.id )[0], {title : action.bookTitle}))
          .concat(state.books.filter(book => book.id > action.id))
      }
    default:
      return state;
  }
};

export default mainReducer;
