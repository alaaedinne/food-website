import React from 'react'
import {Card , Button, Stack} from 'react-bootstrap';
import pk1 from '../images/card1.jpg'
import pk2 from '../images/card2.jpg'
import pk3 from '../images/card3.jpg'
import pk4 from '../images/card4.jpg'
import pk5 from '../images/card5.jpg'
import pk6 from '../images/card6.jpg'
import '../component/Component.css'
import '../pages/Carddetails'
import Carddetails from '../pages/Carddetails';
import ProductItems from "../Data"
import { Link } from 'react-router-dom';
import searchTerm from './Search'

const CardItem = () => {
  
  const renderCard = (card , index)=>{
    return(
      <Card style={{ width: '18rem' , margin : '2em' }} key={index}>
          <Card.Img variant="top" src={card.image} style={{height:"250px"}} />
          <Card.Body >
              <Card.Title >{card.title}</Card.Title>
              <Card.Text >
                  {card.text}
              </Card.Text>
              <Stack className='col-md-6 mx-auto'>
              <a href={card.href} className='btn' variant="secondary" style={{borderRadius:"25px", backgroundColor:"rgb(233, 183, 114)" , borderColor:"rgb(233, 183, 114)", color:"white" }} >Full Recipe</a>
              </Stack>
          </Card.Body>
      </Card>
    )
  }
  return (
    <div className='carditem'>{ProductItems.map(renderCard)}</div>
  )
}

export default CardItem