import React from 'react'
import styledComponents from 'styled-components';
import Search from './Search';
import './Component.css';
function Navbar() {

  const Container = styledComponents.div`
    height: 60px;
    background-color: #ccd5ae;
    box-shadow: 10px 5px 5px gray;
  `
  const Wrapper = styledComponents.div`
  padding:10px 6em;
  justify-content: space-between;
  display:flex;
  `

  return (
    <Container>
        <Wrapper>
            <a className='alink' href='/'> CLUB 80'S</a>
            <Search/>
        </Wrapper> 
    </Container>
  )
}

export default Navbar


