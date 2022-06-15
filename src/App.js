import React from 'react';
import './App.css';
import Stories from './Stories.js';


const useSemiPersitentState = ( key, initialState ) => {
  
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

const App = () => {

const [searchTerm, setSearchTerm] = useSemiPersitentState(
  'search',
  'React'
);

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
  list.map(({ objectID, ...item }) => ( 
    <Item key={objectID} {...item} />
));
    
const Item = ({ title, author, num_comments, points, url, date }) => (
    <div>

      <span>
        <a href={url}>{title}</a>
      </span>
      <span> Author: {author}</span>
      <span> Comments: {num_comments}</span>
      <span> Points: {points}</span>
      <span> Date: {date}</span>

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
