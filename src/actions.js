import axios from 'axios';

export const recieveBooks = (books) => ({
  type : 'RECIEVE_BOOKS',
  books
});

export const fetchBooks2 = () => {
  return fetch("http://localhost:8000/api/books")
    .then(response => recieveBooks(response.json()));
};

export const fetchBooks = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/bookssss");
    return recieveBooks(response.data);
  } catch (error) {
      console.log(error);
      return recieveBooks([])
  }
};

export const deleteBook = bookId => {
  return fetch(`http://localhost:8000/api/books/${bookId}`, {
    method : 'DELETE',
    headers : {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({})
  }).then(response => response.json())
    .then(ok => {
      return {
          type : 'DELETE_BOOK',
          bookId
      };
    });
}

export const addBook = (title, author, price) => {
  return fetch("http://localhost:8000/api/books/add", {
    method : 'POST',
    headers : {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      title : title,
      author : author,
      price : price
    })
  }).then( res => {
      return {
        type : 'ADD_BOOK',
        book : {
          id : Date.now(),
          title : title,
          authorId : res.authorId,
          authors : [{
              firstName : author,
              lastName : ''
          }],
          price : price
        }
      }
    }
    );
};
