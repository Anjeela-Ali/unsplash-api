import './App.css';
import Header from './components/header';
import SearchField from './components/search';

function App() {
  return (
    <div className="App">    
      <Header >
        <SearchField />
      </Header>
    </div>
  );
}

export default App;
