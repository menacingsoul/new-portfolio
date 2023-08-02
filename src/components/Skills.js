import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill2 from '../assets/img/icons8-c.svg';
import skill3 from '../assets/img/icons8-java.svg';
import skill4 from '../assets/img/icons8-python.svg';
import skill5 from '../assets/img/icons8-data-structures-32.png';
import skill6 from '../assets/img/icons8-react-native.svg';
import skill7 from '../assets/img/icons8-mongodb.svg';

import colorSharp from "../assets/img/color-sharp.png"
export const Skills =() =>
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
              
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true}
  autoPlaySpeed={2000} className="skill-slider">
                        
                            <div className="item">
                                <img src={skill2} alt = "image"/>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt = "image"/>
                                <h5>java </h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt = "image"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt = "image"/>
                                <h5>Data structures & Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt = "image"/>
                                <h5>Reactjs</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt = "image"/>
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                    
            </Container>
            <img className="background-image-left" src={colorSharp } />
        </section>
      )
}