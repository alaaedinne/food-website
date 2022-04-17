import React from 'react'
import Nav_bar from '../component/Nav_bar'
import Headers from '../component/Heders'
import './Pages.css'
import { Container , Row , Col } from 'react-bootstrap'
import img from "../images/card6.jpg"
import Footer from '../component/Footer'

const Carddetails6 = () => {
  
  return (
    <div className='AllBodyDetails'>
        <Nav_bar/>
        <Headers/>
        <br/> 
          <Container fluid>
            <Row className="Row">
              <Col>
                  <div className='Image_part'>
                    <img src={img}/>
                  </div>
              </Col>
              <Col>
              <div className='Ingredients'>
                  <h1>Potato & </h1>
                  <h1>Red Lentil Soup</h1>
                  <h3>Ingredients :</h3>
                  <div> Soup.</div>
                  <div> 2 tsp (10 mL) vegetable oil .</div>
                  <div> 1 medium onion, diced.</div>
                  <div> 4 cups (960 mL) water.</div>
                  <div> 1 vegetable bouillon cube, crushed.</div>
                  <div> 1 cup (192 g) dry red lentils, rinsed .</div>
                  <div> 1 medium potato, diced into 1 cm cubes .</div>
                  <div> 1 Tbsp (7 g) paprika powder .</div>
                  <div> 2 tsp (5 g) onion powder .</div>
                  <div> 2 tsp (6 g) garlic powder .</div>
                  <div> 2 tsp (10 mL) balsamic vinegar .</div>
                  <div> ⅛ tsp ground black pepper, or more to taste .</div>
                  <div> 1 pinch salt, or more to taste .</div>
                  
                  <h3>Direction :</h3>
                  <p>
                  To a large pot on medium-high heat, add the oil. When hot, add the onions and sauté until golden, about in about 5 minutes.
                  <br/>Add in the remaining ingredients. Bring to a boil and then reduce to a simmer. Partially cover with a lid and cook for 15 minutes, or until the lentils and potato are cooked through.
                  Taste test, add more salt and pepper to taste, and add more water depending on how you like the consistency of your soup. Garnish
                   <br/>  Enjoy!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer/>
    </div>
  )
}

export default Carddetails6