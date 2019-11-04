import React from 'react';

//Components
import Modal from './components/Modal'
import useModal from './components/useModal'

//Styling
import './App.css';

function App() {

  const {isShowing, toggle} = useModal()
  return (
    <div className="App">
      <h1 style={{fontSize: 100, color: '#fff'}}>Hello</h1>
      <button className='button-default' onClick={toggle}>Show Modal</button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}

export default App;
