import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twitter from "../../Assets/Projects/twitter.png";
import chatify from "../../Assets/Projects/chatify.png";
import weather from "../../Assets/Projects/weather.jpg";

function Projects() {
  useEffect(() => {
    document.title = "Projects";
  });
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/MharanurNitin/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter clone"
              description="It is a web application that mimics the basic function-
ality of popular social media platform like Twitter.The

application would allow users to create accounts,follow
other users,post tweets and view others tweets."
              ghLink="https://github.com/MharanurNitin/twitter-clone"
              demoLink="https://twitter-ashy-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Whether app"
              description="The Weather app created using ReactJS and Recoil. It
is a web-based application that allows users to search
for weather information in different location around the
world. The app uses the weatherapi API to retrieve weather

data, and displays information in an easy-to-read for-
mat."
              ghLink="https://github.com/MharanurNitin/weather-app"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
