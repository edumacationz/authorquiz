import { shuffle, sample } from 'underscore';
import * as Redux from 'redux';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn', 'Tom Sawyer', 'Life on the Mississsippi', 'Roughing It', 'A Connecticut Yankee in King Arthurs Court']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];


function getTurnData(authors) {
  const allBooks = authors.reduce((memo, { books }) => [...memo, ...books], []);
  console.log('all books', allBooks);
  const books = shuffle(allBooks).slice(0, 4);
  const answer = sample(books);

  return {
    books,
    author: authors.find(a => a.books.includes(answer))
  }
}

const initialState = { authors, turnData: getTurnData(authors), highlight: '' };

function reducer(state = initialState, action) {
  // return state;
  switch (action.type) {
    case 'ANSWER_SELECTED':
      const isCorrect = state.turnData.author.books.some(book => book === action.payload);
      const highlight = isCorrect ? 'correct' : 'wrong';

      return {
        ...state,
        highlight
      };
    case 'CONTINUE':
      return {
        ...state,
        highlight: '',
        turnData: getTurnData(state.authors)
      };
    case 'ADD_AUTHOR':
      return {
        ...state,
        authors: [...state.authors, action.payload]
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;