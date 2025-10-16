'use client';

import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function StatsSection(): ReactElement {
  const stats = [
    {
      number: '10,000+',
      label: 'Patients Served',
      icon: 'fas fa-users',
    },
    {
      number: '50+',
      label: 'Expert Doctors',
      icon: 'fas fa-user-md',
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: 'fas fa-headset',
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
      icon: 'fas fa-heart',
    },
  ];

  return (
    <section className="pq-stats-section py-5">
      <Container>
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="pq-stat-card text-center">
                <div className="pq-stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <h3 className="pq-stat-number">{stat.number}</h3>
                <p className="pq-stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
