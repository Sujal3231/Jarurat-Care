"use client";

import React, { ReactElement } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function HeroSection(): ReactElement {
  return (
    <section className="pq-hero-section">
      <div className="pq-hero-background">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="pq-hero-content text-center">
                <span className="pq-hero-badge text-white">Passion for caring</span>
                <h1 className="pq-hero-title">
                  Genuine commitment to your health
                </h1>
                <p className="pq-hero-description text-white">
                  At Jarurat Care, we provide comprehensive healthcare services 
                  with genuine care and advanced medical technology. 
                  Your health is our priority.
                </p>
                <div className="pq-hero-buttons">
                  <Link href="/patients" className="pq-btn pq-btn-primary">
                    <span>View Patients </span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link href="/about" className="pq-btn pq-btn-outline">
                    <span>Learn More </span>
                    <i className="fas fa-info-circle"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
