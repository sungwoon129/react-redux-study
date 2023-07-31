import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;
