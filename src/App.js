import React from 'react';
import './App.css';
import Stories from './Stories.js';



const App = () => {
  const handleSearch = event => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <SearchInput onSearch={handleSearch} />
      <hr />

      <List list={Stories} />
    </div>
  );
}

const List = props =>
  props.list.map(item =>(
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> Author: {item.author}</span>
      <span> Comments: {item.num_comments}</span>
      <span> Points: {item.points}</span>
      <span> Date: {item.date}</span>
    </div>
  ))

const SearchInput = props => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);

  props.onSearch(event);  
  };

  return ( 
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};




export default App;
