import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import Continue from './Continue';
import Footer from './Footer';
import Hero from './Hero';
import Turn from './Turn';

import './App.css';

function mapStateToProps({ turnData, highlight }) {
  return {
    turnData,
    highlight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected(answer) {
      dispatch({ type: 'ANSWER_SELECTED', payload: answer });
    },
    onContinue() {
      dispatch({ type: 'CONTINUE' });
    }
  };
}

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(({ highlight, onAnswerSelected, turnData, onContinue }) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue} />
      <p><Link to='/add'>Add an author</Link></p>
      <Footer />
    </div>
  );
})


export default AuthorQuiz;
