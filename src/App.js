import logo from './logo.svg';
import './App.css';

function getTitle(title){
  return title;
}

const array = [0,12,24,67]

function App() {

  return (
    <div>
      <h1>
        Hello {getTitle("Kitten")}, you have {array.at(2)} live remaining!  
      </h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
  );
}

export default App;
