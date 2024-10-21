import React from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/about-section.css';

const AboutSection = () => {
  return (
    <Row>
      <Col lg="6" md="6">
        <div className="about__section__content">
          <h6 className="section__subtitle">About Us</h6>
          <h2 className="section__title">Welcome to Your Trusted Car Rental Service</h2>
          <p className="section__description">
          Discover hassle-free car rentals with our easy-to-use platform. Whether you need a car for a few hours, a day, or longer, we’ve got you covered with affordable rates and flexible rental periods.
            nemo.{' '}
          </p>

          <div className="about__section-checkbox d-flex align-items-center ">
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Sign up in minutes and start booking.
              amet.
            </p>
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Transparent pricing with no hidden charges.
              amet.
            </p>
          </div>
          <div className="about__section-checkbox d-flex align-items-center  ">
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Serving Delhi and surrounding areas.
              amet.
            </p>
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Rent by the hour, day, or week—your choice!
              amet.
            </p>
          </div>
        </div>
      </Col>

      <Col lg="6" md="6">
        <div className="about__section-img">
          <img
            src="http://localhost:5000/images/bmw-offer.ecfb9ac1.png"
            alt=""
            className="w-100"
          />
        </div>
      </Col>
    </Row>
  );
};

export default AboutSection;
