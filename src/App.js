import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'MongoDB',
    url: 'https://www.mongodb.com/',
    author: 'Not Jordan',
    num_comments: 3,
    points: 7,
    objectID: 2,
  },
  {
    title: 'Spring Boot',
    url: 'https://spring.io/projects/spring-boot',
    author: 'Spiderman',
    num_comments: 2,
    points: 4,
    objectID: 3,
  },
  {
    title: 'Nest JS',
    url: 'https://nestjs.com/',
    author: 'Tom',
    num_comments: 3,
    points: 6,
    objectID: 4,
  },
  {
    title: 'Cycle JS',
    url: 'https://cycle.js.org/',
    author: 'André Staltz',
    num_comments: 2,
    points: 5,
    objectID: 5,
  },
];


function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
    </div>
  );
}

function List(){
  return (
    <ul>
      {list.map(function(item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}> {item.title} </a>
              </span>
              <span> {item.author} </span>
              <span> {item.num_comments} </span>
              <span> {item.points} </span>
            </li>
          );
        })}
    </ul>
  );
}

function Search(){
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' />
  </div>
}

export default App;
