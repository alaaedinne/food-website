import React from 'react'
import Nav_bar from '../component/Nav_bar';
import Heders from '../component/Heders';
import CardItem from '../component/CardItem'
import styledComponents from 'styled-components';
import './Pages.css';
import Footer from '../component/Footer';

function Home() {
    const All = styledComponents.div`
    height:auto;
    `
    const Xxx = styledComponents.div`
    text-align : center;
    font-size:1.5em;
    font-weight:bold;
    `
    const Div = styledComponents.div`
    
    `
    const Zzz = styledComponents.img`
    height:10em;
    width:auto;
    flex:2;
    border: solid .2px black;
    `
    const Wrapper = styledComponents.div`
    padding:10px 11em ;
    justify-content: space-between;
    display:flex;
    `
    const Center = styledComponents.div`
    flex:.01;
    `
  return (
    <All>
    <Nav_bar/>
    <Heders/>
    <Wrapper>
        <Center></Center>
        <div className='image'> </div>
        <Center></Center>
    </Wrapper>

        <div className="p-4">
             
            <Xxx >Recipe Directory</Xxx>
            <br></br>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <CardItem/>      
            
        </div>
        

        </div>

    <Footer/>
    </All>
  )
}

export default Home