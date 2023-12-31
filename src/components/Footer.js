import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/icons8-github1.svg';
import navIcon3 from '../assets/img/code-forces.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row id="align-items-center">
          
          <Col size={12} sm={6}>
         <span>Adarsh</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/adarsh--/"><img src={navIcon1} alt="" /></a>
             <a href="https://github.com/menacingsoul"><img src={navIcon2} alt="" /></a>
             <a href="https://codeforces.com/profile/syntax_ninja"><img src={navIcon3} alt="codeforces" /></a>
            </div>
            <p>Made with ❤️&☕ by Adarsh.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}