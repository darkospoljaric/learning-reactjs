const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let { data } = require('./data');

const getBookAuthors = book => {
  const authodIds = book.authorId ? [book.authorId] : book.authorIds;
  return authodIds.map(authorId => data.authors[authorId]);
}

app.get('/api/books', (req, res) => {
  res.send(data.books.map(book => {
    return Object.assign({}, book, {
      authors : getBookAuthors(book)
    });
  }));
});

app.post('/api/books/add', (req, res) => {
  const maxBookId = data.books.reduce((a, b) => {
    return a.id > b.id ? a : b;
  }).id;

  const newAuthorId = Date.now();
  data.authors[newAuthorId] = {
      firstName : req.body.author,
      lastName : ''
  };

  data.books = data.books.concat({
    id : maxBookId + 1,
    title : req.body.title,
    authorId : newAuthorId,
    price : req.body.price
  });

  res.send({
    added : true,
    authorId : newAuthorId
  });
});

app.delete('/api/books/:bookId', (req,res) => {
  console.log(req.params.bookId);
  data.books = data.books.filter( book =>
    book.id !== Number(req.params.bookId)
  );
  console.log(data.books);
  res.send({deleted : true});
});

app.listen(8000, () => {
  console.log('API server is at port 8000');
});
