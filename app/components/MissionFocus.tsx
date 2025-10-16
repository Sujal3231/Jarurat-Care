"use client";

import React, { ReactElement } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function MissionFocus(): ReactElement {
  const missionData = [
    {
      icon: "fas fa-hands-helping",
      title: "Our Mission",
      description:
        "We're a community-driven NGO dedicated to bringing hope, care, and strength to patients, caregivers, and healthcare professionals across India. We stand by those affected by cancer, offering unwavering support every step of the way.",
      bgColor: "primary",
    },
    {
      icon: "fas fa-heart",
      title: "Our Focus",
      description:
        "Creating a warm and inclusive space where everyone's needs are heard and met. Whether it's providing a comforting word, nutritional advice, or practical help, we're here to make the journey a little easier.",
      bgColor: "success",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">
          {missionData.map((item, index) => (
            <Col lg={6} key={index}>
              <Card className="h-100 border-0 shadow-lg pq-card-hover">
                <Card.Body className="p-5 text-center">
                  <div className="pq-icon-wrapper mb-4">
                    <div
                      className={`pq-icon-circle bg-${item.bgColor} text-white shadow`}
                    >
                      <i className={`${item.icon} fa-2x`}></i>
                    </div>
                  </div>
                  <Card.Title className="h3 pq-text-primary mb-4">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="fs-6 text-muted">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
