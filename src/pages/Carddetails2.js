import React from 'react'
import Nav_bar from '../component/Nav_bar'
import Headers from '../component/Heders'
import './Pages.css'
import { Container , Row , Col } from 'react-bootstrap'
import img from "../images/card2.jpg"
import Footer from '../component/Footer'

const Carddetails2 = () => {
  
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
                  <h1>Mushroom & </h1>
                  <h1> Kidney Bean Coconut Curry</h1>
                  <h3>Ingredients :</h3>
                  <div> 1¼ cups (250 g) uncooked white rice, rinsed .</div>
                  <div> 2 tsp (10 mL) vegetable oil .</div>
                  <div> 1 medium onion, chopped.</div>
                  <div> 3 cloves garlic, minced.</div>
                  <div> 1 fresh jalapeño, minced.</div>
                  <div> 1 tsp (2 g) freshly grated ginger.</div>
                  <div> 3½ cups (245 g) button mushrooms, chopped.</div>
                  <div> 1 Tbsp (5 g) garam masala.</div>
                  <div> 2 tsp (6 g) ground cumin.</div>
                  <div> 2 tsp (4 g) ground coriander.</div>
                  <div> ½ tsp salt.</div>
                  <div> 1⅔ cups (399 mL) canned crushed tomatoes.</div>
                  <div> 1⅔ cups (399 mL) canned full-fat coconut milk.</div>
                  <div> 1⅓ cups (236 g) cooked red kidney beans.</div>
                  <div> 2 cups (60 g) fresh spinach.</div>
                  <div> ½ lime, juiced.</div>
                  
                  <h3>Direction :</h3>
                  <p>Cook the rice according to the package instructions.<br/>
                  In a large pot over medium-high heat, heat the oil and add the onion. Sauté for 3 - 4 minutes, adding splashes of water if needed to deglaze the pan.                  <br/> Taste test. The raspberries are tart and the lemon is sour.If you feeel it's needed, add more agave syrup (or maple syrup) to cut though the tartness. 
                  <br/> Meanwhile, prepare the garlic, jalapeño, and ginger. Then add these to the pot to cook for 2 minutes. Stir often. <br/> Next add in the mushrooms, garam masala, cumin, coriander, and salt and cook for 4 - 5 minutes, or until the mushrooms have released their moisture and are soft. Add a splash of water if needed to prevent the spices from burning.
                   <br/> Add the tomatoes, coconut milk, and kidney beans. Stir and bring to a gentle boil. Cook for 5 minutes, stirring often. Then add in the spinach and stir until wilted.
Before serving, squeeze in the lime juice. Serve with rice or naan, fresh cilantro leaves and extra lime wedges if desired. 

                   <br/>Enjoy!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer/>
    </div>
  )
}

export default Carddetails2

