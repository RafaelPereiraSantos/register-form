import React from 'react';
import Form from './components/form/form';
import Root from './components/root/root';
import './components/app.css';

function App() {
  return (
    <div className="App">
      <Root>
        <Form/>
      </Root>
    </div>
  );
}

export default App;
