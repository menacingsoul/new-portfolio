import { Container } from 'react-bootstrap'
import projImg1 from '../assets/img/Screenshot1.png'
import projImg2 from '../assets/img/Screenshot2.png'
import projImg3 from '../assets/img/Screenshot3.png'
import {Row,Col,Nav,Tab} from 'react-bootstrap'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { ProjectCard } from './ProjectCard'
export const  Project=()=>
{
    const projects = [
        {
            title: "Portfolio ",
            description: "Build using Reactjs",
            imgUrl: projImg1,
            github:"",
          },
          {
            title: "Quiz Club IIT BHU website",
            description: "Built using HTML, CSS, Javascript",
            imgUrl: projImg2,
            github:"https://github.com/menacingsoul/quizclubiitbhu",
          },
          {
            title: "Basic Portfolio",
            description: "Built using HTML, CSS, Javascript",
            imgUrl: projImg3,
            github:"https://github.com/menacingsoul/portfolio",
          }
          
    ]
    return(
        <section className="projects" id="projects">
            <Container >
               <Row>
                <Col size={12}>
                <h2 id='project-head'>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                           <ProjectCard 
                           key={index}
                           {...project}
                           />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                 
                </Tab.Container>
             
                </Col>
                </Row> 
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}