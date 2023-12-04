import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github1.svg';
import navIcon3 from '../assets/img/code-forces.svg';


export const NavBar=()=> {
    const [activeLink, setActiveLink] = useState('home');
    const[scrolled,setScrolled]  = useState(false);
    useEffect(()=>
    {
        const onScroll = ()=>
        {
            if(window.scrollY>50)
            {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return()=>window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
  
    <Navbar expand="lg" className={scrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home"><span id='logo'>Adarsh.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink ==='skills'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink ==='projects'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <a href='https://docs.google.com/document/d/1GRK-1yxGjKOwKyfCdshrWU9mOH4mHeWAv7fKBm8-y08/edit?usp=sharing'><button id='resume-btn'>Resume</button></a>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/adarsh--/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/menacingsoul"><img src={navIcon2} alt="github" /></a>
                <a href="https://codeforces.com/profile/menacing_soul"><img src={navIcon3} alt="codeforces" /></a>  
            </div>
            
              
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  )
}

