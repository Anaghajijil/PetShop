import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='row'>
        <div className='col-10'>
            <input className='search-text' type="text"></input>
            </div>
            <div className='col-2'>
                <button className='search-button'>Search</button>

            </div>
     
    </div>
  )
}

export default Search