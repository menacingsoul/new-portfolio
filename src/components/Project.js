import { Container } from 'react-bootstrap'
import projImg1 from '../assets/img/Screenshot1.png'
import projImg2 from '../assets/img/Screenshot2.png'
import projImg3 from '../assets/img/Screenshot3.png'
import projImg4 from '../assets/img/Screenshot4.png'
import projImg5 from '../assets/img/Screenshot5.png'
import projImg6 from '../assets/img/Screenshot6.png'
import {Row,Col,Nav,Tab} from 'react-bootstrap'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { ProjectCard } from './ProjectCard'
export const  Project=()=>
{
    const projects = [
      {
        title: "Travel planner",
        description: "A community based travel planning app build on React native and Express",
        imgUrl: projImg5,
        github:"https://github.com/menacingsoul/travel-planner",
      },
      {
        title: "Mood Diary ",
        description: "A full stack project that uses open AI API to analyse journals",
        imgUrl: projImg4,
        github:"https://github.com/menacingsoul/mood-diary",
      },
      
        {
            title: "Portfolio ",
            description: "Build using Reactjs and Expressjs",
            imgUrl: projImg1,
            github:"https://github.com/menacingsoul/new-portfolio",
          },
          {
            title: "Insticonnect",
            description: "Currently under development, a social media kind of app for students",
            imgUrl: projImg6,
            github:"https://github.com/menacingsoul/campus-khabar",
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
            <Container className='project' >
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