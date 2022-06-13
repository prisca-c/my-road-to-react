import React from 'react';
import './App.css';
import TableList from './TableList.js';

  
function App() {
  return (
    <div>

      <h1>My Hacker Stories</h1>
      <SearchInput />
      <hr />

    {TableList.map( item => {
      if(item.date > 2013) 
      {
      return <List key={item.objectID}  
        author={item.author}
        num_comments={item.num_comments}
        points={item.points}
        date={item.date} />
      } else { 
        return null 
      }
    })}

    </div>
  );
}

function List (props) {
  
        return(
          <div>
            <span>
              <a href='{props.url}'>{props.title}</a>
            </span>
            <span> Author: {props.author}</span>
            <span> Comments: {props.num_comments}</span>
            <span> Points: {props.points}</span>
            <span> Date: {props.date}</span>
          </div>);
      
    }
  ;

function SearchInput () {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}



export default App;
