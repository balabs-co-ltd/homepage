import React from 'react';
import {Col, Container, Navbar, Row} from 'react-bootstrap';
import logo from './lg_bclabs.svg';
import r1 from './img_r1.svg';
import r2 from './img_r2.svg';
import './Main.scss';

/**
 * Main
 * @return {JSX.Element}
 */
class Main extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg" fluid>
      <Navbar className="justify-content-center">
        <span className="logo">
          <img src={logo} alt="BCLabs" />
        </span>
      </Navbar>
      <hr className="logodiv"/>
      <Row className="vh-100 justify-content-center align-item-center">
        <Col xl={8} className="text-center">
          <h1
            className="mb-5 maintitle"
            data-aos="fade"
            data-aos-delay="200"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Universal Access to<br/>Digital Asset Management
          </h1>
          <p
            className="slogan"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            With a team specializing in fintech, blockchain and data
            analytics, we seek to<br/>harness the cutting-edge innovations
            and address the growing technology<br/>gap in the global
            financial industry.
          </p>
          <div
            className="mainshape"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src={r1} alt="shape" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src={r2} alt="shape" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;