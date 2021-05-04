import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div className="App ui container" style={{ marginTop: '10px' }}>
		<SearchBar></SearchBar>
    </div>
  );
}

export default App;
