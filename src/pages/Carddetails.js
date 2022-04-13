import React from 'react'
import Nav_bar from '../component/Nav_bar'
import Headers from '../component/Heders'
import './Pages.css'
import { Container , Row , Col } from 'react-bootstrap'
import img from "../images/card1.jpg"
import Footer from '../component/Footer'

const Carddetails = () => {
  
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
                  <h1>Raspberry Lemonade</h1>
                  <h1>Smothie Bowl</h1>
                  <h3>Ingredients :</h3>
                  <div> 1½  cups(225 g) frozen respberries.</div>
                  <div> 1 frozen banana.</div>
                  <div> 1 lemon, juiced.</div>
                  <div> ½ cup (120 ml) unsweetened soy yagurt.</div>
                  <div> ½ cup (68 g) roasted cashews.</div>
                  <div> ¼ cup (60 ml) unsweetened soy milk.</div>
                  <div> 1 Tbsp (15 ml) agave syrup, or more to taste.</div>
                  
                  <h3>Direction :</h3>
                  <p>
                  add all ingredients to a high-speed blender and combine on high until smooth, stop to scrape down the sides as needed <br/> Taste test. The raspberries are tart and the lemon is sour.If you feeel it's needed, add more agave syrup (or maple syrup) to cut though the tartness. <br/> Divide into bowls and top with fesh fruit, granola and chia seeds, if desired. <br/>  Enjoy!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer/>
    </div>
  )
}

export default Carddetails