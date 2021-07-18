import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import './Do.scss';

/**
 * Do
 * @return {JSX.Element}
 */
class Do extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-do" fluid>
      <Row className="vh-do justify-content-center align-items-center">
        <Col xs={10} className="text-center">
          <h2
            className="section-title"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offset='-100'>
            <span className="section-bold">
            Take a look</span> at our wonderful projects
          </h2>
        </Col>
        <Col xs={10} className="bg-container">
          <a
            href="https://playv.co"
            target="blank" className="pantheonx_bg">
            <object type="image/svg+xml" className="pantheonx" data="https://s3.ap-northeast-1.amazonaws.com/open.volta/logo/playV-bigLogo.svg">
              <img src="https://s3.ap-northeast-1.amazonaws.com/open.volta/logo/playV-bigLogo.svg" className="pantheonx" alt="PlayV" />
              <span className="sr-only">PANTHEON X</span>
            </object>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Do;
