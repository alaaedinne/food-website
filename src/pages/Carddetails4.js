import React from 'react'
import Nav_bar from '../component/Nav_bar'
import Headers from '../component/Heders'
import './Pages.css'
import { Container , Row , Col } from 'react-bootstrap'
import img from "../images/card4.jpg"
import Footer from '../component/Footer'

const Carddetails4 = () => {
  
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
                  <h1>Miso Sesame Soba Noodles</h1>
                  <h3>Ingredients :</h3>
                  <div> Dressing.</div>
                  <div> ⅓ cup (80 mL) rice vinegar.</div>
                  <div> ¼ cup (60 mL) tahini.</div>
                  <div> 3 Tbsp (45 mL) white miso paste.</div>
                  <div> 2 Tbsp (30 mL) dark soy sauce .</div>
                  <div> 2 cloves garlic, crushed.</div>
                  <div> 2 tsp (10 mL) sesame oil.</div>
                  <div> 2 tsp (10 mL) maple syrup .</div>
                  <div> 1 tsp (2 g) freshly grated ginger.</div>
                  <div> Assembly.</div>
                  <div> 6.3 oz (180 g) dry soba noodles.</div>
                  <div> 1 tsp (5 mL) sesame oil.</div>
                  <div> 4.9 oz (140 g) shiitake mushrooms, thinly sliced.</div>
                  <div> 1½ cups (225 g) frozen shelled edamame beans, thawed.</div>
                  <div> 1 avocado, sliced.</div>
                  <div> 6 small raw radishes, sliced (optional).</div>
                  <div> 1 stalk green onion, thinly sliced.</div>
                  <div> 1 Tbsp (9 g) toasted sesame seeds.</div>
                  
                  <h3>Direction :</h3>
                  <p>
                  In a mason jar or bowl, mix together the rice vinegar, tahini, miso paste, soy sauce, crushed garlic, sesame oil, maple syrup, and grated ginger.
In a saucepan cook the soba noodles according to the package instructions, then drain. For us, this took about 5 minutes.
                  <br/>Meanwhile heat up a large pan on high heat with the oil. When hot, add in the mushrooms and edamame beans and cook until softened, about 5 minutes.
                  <br/>Then add the soba noodles, and dressing. Let everything heat up for 2 minutes.
Divide the noodles between your bowls, and top with sliced avocado, radishes, green onions, and sesame seeds. 
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

export default Carddetails4