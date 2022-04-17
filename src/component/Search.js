import React from 'react'
import styledComponents from 'styled-components'
import '../component/Component.css';
import img1 from '../images/search.png';
import { useState } from 'react';

const Search = () => {
  const [searchTerm , setSearchTerm] = useState('')
    const All = styledComponents.div`
    margin:0;
    padding:0;
    font-family: 'Poppins' , sans-serif;
    `

  return (
    <All>
        <form action='' className='search-bar'>
            <input type={"text" }placeholder="Search anything" name='q' />
            <button type='submit'><img src={img1}></img></button>
        </form>
    </All>
  )
}

export default Search