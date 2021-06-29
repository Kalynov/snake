import React from 'react';
import './App.css';
import Area from "./Components/Area";
import { Provider } from 'react-redux';
import store from './ARSs/reducers';

function App() {
  return (
    <Provider  store = {store}>
      <React.StrictMode>
        <div className="App">
          <Area/>
        </div>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
