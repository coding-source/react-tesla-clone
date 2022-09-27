import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
      <Section
         title= "Model s"
         description="Order Online for Touchless Delivery"
         backgroundimg="model-3.jpg"
         leftBtnText="Custom order"
         rigthBtnText="Existing inventory"
      
      />
      <Section 
       title= "Model Y"
       description="Order Online for Touchless Delivery"
       backgroundimg="model-y.jpg"
       leftBtnText="Custom order"
       rigthBtnText="Existing inventory"
      
      
      />
      <Section 
      
      title= "Model 3"
      description="Order Online for Touchless Delivery"
      backgroundimg="model-3.jpg"
      leftBtnText="Custom order"
      rigthBtnText="Existing inventory"
      
      />
      <Section 
       title= "Model X"
       description="Order Online for Touchless Delivery"
       backgroundimg="model-x.jpg"
       leftBtnText="Custom order"
       rigthBtnText="Existing inventory"
      
      
      />

<Section 
       title= "Lowest Cost Solar Panels in America"
       description="Money Back Gaurantee"
       backgroundimg="Solar-Panel.jpg"
       leftBtnText="Order now"
       rigthBtnText="Learn more"
      
      
      />
      <Section 
       title= "Solar For New Roofs"
       description="Solar Roofs Produce Clean Energy from Your Roof"
       backgroundimg="Solar-roof.jpg"
       leftBtnText="Order now"
       rigthBtnText="Learn more"
      
      
      />
      <Section 
       title= "Accessories"
       description=""
       backgroundimg="accessories.jpg"
       leftBtnText="Shop now"
       
      
      
      />

        </Container>
          
     
    )
}

export default Home

const Container = styled.div`
  height: 100vh;
`