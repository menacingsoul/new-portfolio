import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/favpng_programmer.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Competitve Programmer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
            
              <span id="banner-tagline">
              
                <h1>{`Hi! I'm Adarsh.`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                </span>
                  <p>I am currently pursuing Bachelor of Technology (B-Tech) from, <span class="college"><br/>Indian Institute of Technology (BHU), Varanasi.</span></p>
                 <a href="#connect" id ="connect-btn-2"><button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button></a> 
           
        
          </Col>
          <Col xs={12} md={6} xl={5}>
          
             
                  <img src={headerImg} alt="Header Img"/>
              
         
          </Col>
        </Row>
      </Container>
    </section>
  )
}