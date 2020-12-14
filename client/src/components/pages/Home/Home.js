import React, { Component }  from "react";
import { Carousel } from "react-bootstrap";
import './Home.css'

import img1 from './ImgCarrusel/Gorillaz.jpg' 
import img2 from './ImgCarrusel/CatPower.jpg' 
import img3 from './ImgCarrusel/YlaBamba.jpg' 
import img4 from './ImgCarrusel/IronandWine.jpg'



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
      
      <Carousel className="carusel" activeIndex={this.state.value} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={img1}
            alt="Gorillaz"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
          className="d-block w-100" 
            src={img2}
            alt="Cat Power"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
          src={img3}    
            alt="Y la Bamba"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
          src={img4}    
            alt="Iron and wine"
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  }
   

  export default Home