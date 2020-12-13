import React, { Component }  from "react";
import { Carousel } from "react-bootstrap";
import img1 from './carrusel/jens-thekkeveettil-dBWvUqBoOU8-unsplash.jpg' 
import img2 from './carrusel/matthew-kalapuch-sqJ4tLBiurw-unsplash.jpg' 
import img3 from './carrusel/yannis-papanastasopoulos-yWF2LLan-_o-unsplash.jpg' 
class  Home  extends Component    {
    
  constructor(props) {
    super(props);
    this.state = { 
      value:0, 
    }; 
  }

     handleSelect =  (selectedIndex, e)  => {
      this.setState({value:selectedIndex});
    };
  render(){

    return (
      <Carousel activeIndex={this.state.value} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
          className="d-block w-100" 
            src={img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
          src={img3}    
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  }
   

  export default Home