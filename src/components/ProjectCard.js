import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4><a href={github} id="githublink">{title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}