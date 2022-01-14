import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import partnerImg1 from '../../images/partner/sage-intacct-customer-for-life.png';
import partnerImg2 from '../../images/partner/aicpa-preferred-financial-management-solution.png';
import partnerImg3 from '../../images/partner/grow-scale-with-sage-intacct.png';

const Partners = () => {
    return (
      <div>
        <div className="text-center">
          <p className="fs-2">
            Your <span className="fw-bold">partner for the long-term</span>
          </p>
          <p className="btn-txt">
            We’re obsessed with ensuring your success. From our
            <span className="text-success"> Customer for Life™ </span>
            program to our <br /> proven,
            <span className="text-success"> connected products</span> that you
            won’t outgrow; we’ll be with you every step of the way.
          </p>
        </div>
        <div className='container px-3'>
          <Row xs={1} md={3} className="g-0">
            <Col className="p-3">
              <Card.Body className="h-100 text-start">
                <Card.Img
                  variant="top"
                  src={partnerImg1}
                  className="img-fluid h-25 w-100"
                />
                <Card.Text className="btn-txt pt-3">
                  You get a partner that’s invested in your success
                </Card.Text>
              </Card.Body>
            </Col>
            <Col className="p-3">
              <Card.Body className="h-100 text-start">
                <Card.Img
                  variant="top"
                  src={partnerImg2}
                  className="img-fluid h-25 w-100"
                />
                <Card.Text className="btn-txt pt-3">
                  You get the best, proven technology for your organization
                </Card.Text>
              </Card.Body>
            </Col>
            <Col className="p-3">
              <Card.Body className="h-100 text-start">
                <Card.Img
                  variant="top"
                  src={partnerImg3}
                  className="img-fluid h-25 w-100"
                />
                <Card.Text className="btn-txt pt-3">
                  You won’t outgrow us; we’ll scale with you every step of the
                  way
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default Partners;