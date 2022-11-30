import * as React from 'react';
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


const App = () =>  {

  console.log("app renders");

  const stories = [
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

  const handleSearch = (event) => {
    console.log(event.target.value);
  }

  return(
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list = {stories} />
    </div>
  );

}

const List = (props) => {

  return(
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
  )
};

const Item = (props) => {

  return(
  <li>
    <span>
      <a href={props.item.url}> {props.item.title} </a>
    </span>
    <span> {props.item.author} </span>
    <span> {props.item.num_comments} </span>
    <span> {props.item.points} </span>
  </li>
  )
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  }

  return(
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' onChange={handleChange}/>
    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
  </div>
  );
}

export default App;
