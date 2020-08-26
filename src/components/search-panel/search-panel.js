import React from 'react';
import './search-panel.css'
const SearchPanel = () =>{
    const searchText = 'enter search text';
    const style = {
      fontSize:'18px',
     
    }
    return <input type="text" className='form-control search-input' 
    placeholder={searchText}
     />
  }
  export default SearchPanel;