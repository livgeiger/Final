import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


function Spinny (){
    return(
        <Container>
        <div>
        <Carousel variant="dark">
          <Carousel.Item interval={5000}>
              <img
                className="w-100"
                src="./images/mountains.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="./images/flappers.jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="./images/blossoms.jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="./images/tv.jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
    
          </Carousel>
         </div>
       </Container>
        


    )


}

export default Spinny;