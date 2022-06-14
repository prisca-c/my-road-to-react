import React from 'react';
import './App.css';
import Stories from './Stories.js';



const App = () => {

  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    
  }

  const searchedStories = Stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <SearchInput search={searchTerm} onSearch={handleSearch} />
      <hr />

      <List list={searchedStories} />
    </div>
  );
}

const List = ({ list }) =>
  list.map(item => 
    <Item key={item.objectID} item={item} />
);
    
const Item = ({ item }) => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> Author: {item.author}</span>
      <span> Comments: {item.num_comments}</span>
      <span> Points: {item.points}</span>
      <span> Date: {item.date}</span>
    </div>
);

const SearchInput = ({ search, onSearch }) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text"
        value={search} 
        onChange={onSearch}
      />

    </div>
  )
};




export default App;
