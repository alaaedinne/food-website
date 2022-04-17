import React from 'react'
import Nav_bar from '../component/Nav_bar'
import Headers from '../component/Heders'
import './Pages.css'
import { Container , Row , Col } from 'react-bootstrap'
import img from "../images/card3.jpg"
import Footer from '../component/Footer'

const Carddetails3 = () => {
  
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
                  <h1>Warm Pearl Couscous Salad </h1>
                  <h3>Ingredients :</h3>
                  <div> Salad.</div>
                  <div> 1 cup (200 g) uncooked pearl couscous .</div>
                  <div> 2 tsp (10 mL) olive oil.</div>
                  <div> 2 cups (328 g) cooked chickpeas .</div>
                  <div> 2 cups cherry tomato, quartered .</div>
                  <div> ½ tsp salt.</div>
                  <div> ¼ tsp ground black pepper.</div>
                  <div> ½ cucumber, sliced into half-moons.</div>
                  <div> ¼ cup (34 g) sliced black olives.</div>
                  <div> 3 Tbsp (6 g) fresh mint leaves, chopped.</div>
                  <div> 2 Tbsp (3 g) fresh basil, chopped.</div>
                  <div> 2 Tbsp (2 g) fresh parsley, chopped (optional).</div>
                  <div>¼ cup (32 g) roasted almonds, chopped (optional).</div>
                  
                  <h3>Direction :</h3>
                  <p>
                  Cook the couscous according to the package instructions. When cooked, drain.<br/>
                  Meanwhile, to a medium pan on medium-high heat, add the oil, chickpeas, tomatoes, salt, and pepper. Cook for about 5 - 7 minutes, stirring occasionally until the tomatoes have softened a little bit. Remove from the heat before the tomatoes become too soft.<br/>
                  In a small bowl, mix together the ingredients for the dressing.<br/>
                  To a large bowl, add the drained couscous, tomato and chickpea mixture, cucumber slices, olives, and fresh herbs. Add the dressing, toss to combine, spinkle over the almonds, and enjoy!
                  </p>
                </div>          
              </Col>
            </Row>
          </Container>
          <Footer/>
    </div>
  )
}

export default Carddetails3