
import PropTypes from 'prop-types';
import React from 'react';
import './App.css';

import Book from './Book';

function Turn({ author, books, onAnswerSelected, highlight }) {

  function highlightToBackgroundColor(highlight) {
    const mapping = {
      none: 'white',
      correct: 'green',
      wrong: 'red'
    };

    return mapping[highlight] || mapping.none;
  }

  return (<div className='turn row' style={{ backgroundColor: highlightToBackgroundColor(highlight) }}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} alt="Author" className="authorimage" />
    </div>
    <div className="col-6">{books.map((title, index) => <Book key={index} title={title} onClick={onAnswerSelected} />)}</div >
  </div>);
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

export default Turn;