import React from 'react';
import './App.css';
import initialStories from './Stories.js';


const useSemiPersistentState = ( key, initialState ) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );

  const [stories, setStories] = React.useState(initialStories);

  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    );

    setStories(newStories);
  };


  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <h1>My Hacker Stories</h1>

      <InputWithLabel 
        id="search"
        value={searchTerm} 
        isFocused
        onInputChange={handleSearch}
      >

        <strong>Search</strong>

      </InputWithLabel> 

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />

    </div>
  );
}

const InputWithLabel = ({ 
  id,
  value, 
  type = "text" , 
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}> {children} </label>
      &nbsp;
      <input
        ref={inputRef} 
        id={id}
        type={type}
        value={value} 
        onChange={onInputChange}
      />
    </>
  );
}

const List = ({ list, onRemoveItem }) =>
  list.map(item => (
    <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
    />
  ));
    
const Item = ({ item, onRemoveItem }) => (
    <div>

      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> Author: {item.author}</span>
      <span> Comments: {item.num_comments}</span>
      <span> Points: {item.points}</span>
      <span> Date: {item.date}</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </span>

    </div>
  );




export default App;
