import React from 'react'
import Nav_bar from '../component/Nav_bar'
import Headers from '../component/Heders'
import './Pages.css'
import { Container , Row , Col } from 'react-bootstrap'
import img from "../images/card5.jpg"
import Footer from '../component/Footer'

const Carddetails5 = () => {
  
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
                  <h1>Avocado Toast </h1>
                  <h3>Ingredients :</h3>
                  <div> 1½ cups (268 g) cooked cannellini beans .</div>
                  <div> 1½ Tbsp (22 mL) chipotle adobo sauce, plus more to taste.</div>
                  <div> 1 Tbsp (2 g) nutritional yeast flakes.</div>
                  <div> 1 tsp (5 mL) maple syrup.</div>
                  <div> ½ tsp onion powder.</div>
                  <div> ½ tsp garlic powder.</div>
                  <div> ½ tsp salt.</div>
                  <div> ¼ tsp ground black pepper.</div>
                  <div> 2 tsp (10 mL) vegetable oil .</div>
                  <div> 4 slices whole wheat bread .</div>
                  <div> 1 cup (165 g) canned corn, drained, rinsed.</div>
                  <div> 1 avocado, sliced.</div>
                  <div> 1 stalk green onion, thinly sliced.</div>
            
                  
                  <h3>Direction :</h3>
                  <p>
                  To a small food processor, add the beans, chipotle sauce, nutritional yeast, maple syrup, onion powder, garlic powder, salt, and black pepper. Blend until smooth and creamy, scraping down the sides as needed. <br/> Heat a large pan on medium-high heat and add half of the oil. Grill the slices of bread on each side for 1 - 2 minutes, or until toasted and golden. Set aside. <br/>Next, wipe out the residue that might be left in the pan, and add the rest of the oil and corn. Cook for 4 - 5 minutes, stirring occasionally, or until the corn has some golden-brown spots.
Top the toasted bread with chipotle bean spread avocado, corn, green onion, and black sesame seeds. Garnish with chili flakes and enjoy!

                  </p>
                </div>

                
              </Col>
            </Row>
          </Container>
          <Footer/>
    </div>
  )
}

export default Carddetails5