import React from "react";

const styleAboutPage = {
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  borderRadius: "30px",
  padding: "1em",
};

class AboutPage extends React.Component {
  render() {
    return (
      <div style={styleAboutPage}>
        <h1>About</h1>
        <p>This app is divided in 2 parts, a back-end and a front-end.</p>
        <h3>Back-end</h3>
        <p>
          The back-end uses Java 11 with the frameworks Spring Boot and
          hibernate.
        </p>
        <a href="http://localhost:8080/swagger-ui.html">API Documentation</a>
        <h4>List of dependencies :</h4>
        <ul>
          <li>spring-boot-starter-parent: 2.4.2</li>
          <li>spring-boot-starter-data-jpa</li>
          <li>spring-boot-starter-data-rest</li>
          <li>spring-boot-starter-web</li>
          <li>mysql-connector-java: runtime</li>
          <li>spring-boot-starter-test:test</li>
          <li>spring-restdocs-mockmvc: test</li>
          <li>commons-lang3</li>
          <li></li>
        </ul>
        <h3>Front-end</h3>
        <p>The front-end uses javascript and the framework React js.</p>
        <h4>List of dependencies :</h4>
        <ul>
          <li>@material-ui/core: 4.11.3</li>
          <li>@testing-library/jest-dom: 5.11.4</li>
          <li>@testing-library/react: 11.1.0</li>
          <li>@testing-library/user-event: 12.1.10</li>
          <li>bootstrap: 4.6.0</li>
          <li>flux: 4.0.1,</li>
          <li>react: 17.0.1,</li>
          <li>react-dom: 17.0.1</li>
          <li>react-router-dom: 5.2.0</li>
          <li>react-scripts: 4.0.1</li>
          <li>react-toastify: 7.0.3</li>
          <li>reactjs-popup: 2.0.4</li>
          <li>web-vitals: 0.2.4</li>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
