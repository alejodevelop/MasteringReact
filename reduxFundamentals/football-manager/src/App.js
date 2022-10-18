import React from 'react';
import { Provider } from "react-redux";
import store from './store';
import Players from './components/Players';
import SelectedTeam from './components/SelectedTeam';
import "./styles/styles.scss";

function App() {
  return (
    /*
      The <Provider> component makes the Redux store available to 
      any nested components that need to access the Redux store.
    */
    <Provider store={store}>
      <main>
        <h1>football-manager</h1>
        <Players />
        <SelectedTeam />
      </main>
    </Provider>
  );
}

export default App;
