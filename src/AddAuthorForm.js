import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

import "./AddAuthorForm.css"

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      imageURL: '',
      books: [],
      bookTemp: ''
    }

    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }


  onFieldChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onAddAuthor(this.state);
  }

  handleAddBook(event) {
    event.stopPropagation();

    this.setState({
      books: [...this.state.books, this.state.bookTemp],
      bookTemp: ''
    })
  }
  render() {
    return (
      <fieldset className='addauthor-form'>
        <legend>Add Author</legend>
        <form onSubmit={this.handleSubmit}>
          <div className="addauthor-form-input">
            <label htmlFor="name">Name</label>
            <input type="text" value={this.state.name} name='name' onChange={this.onFieldChange} />
          </div>
          <div className="addauthor-form-input">
            <label htmlFor="imageURL">ImageURL</label>
            <input type="text" value={this.state.imageURL} name='imageURL' onChange={this.onFieldChange} />
          </div>
          <div className="addauthor-form-input">
            <label htmlFor="bookTemp">Books</label>
            {this.state.books.map(b => <p key={b}>{b}</p>)}
            <input type="text" name='bookTemp' value={this.state.bookTemp} onChange={this.onFieldChange} />
            <button type='button' onClick={this.handleAddBook} disabled={!this.state.bookTemp.trim()}>+
            </button>
          </div>
          <button>Submit</button>
        </form>
      </fieldset>
    );
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    onAddAuthor(author) {
      dispatch({ type: 'ADD_AUTHOR', payload: author });
      props.history.push('/');
    },
  }
}

const AddAuthorForm = withRouter(connect(state => state, mapDispatchToProps)(({ onAddAuthor }) => {
  return (
    <AuthorForm onAddAuthor={onAddAuthor} />
  )
}));

export default AddAuthorForm;