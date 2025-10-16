"use client";

import React, { ReactElement } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function CTASection(): ReactElement {
  const scrollToFooter = () => {
    // Use setTimeout to ensure smooth scrolling
    setTimeout(() => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section className="pq-cta-section py-5">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="pq-cta-content text-center">
              <h2 className="pq-cta-title mb-4">Ready to Get Started?</h2>
              <p className="pq-cta-description text-white mb-5">
                Join thousands of satisfied patients who trust Jarurat Care for
                their healthcare needs. Experience the difference of
                compassionate, professional medical care.
              </p>
              <div className="pq-cta-buttons">
                <Link href="/patients" className="pq-btn pq-btn-light">
                  <span>Manage Patients</span>
                  <i className="fas fa-user-injured ms-2"></i>
                </Link>
                <Link
                  href="#footer"
                  onClick={scrollToFooter}
                  className="pq-btn pq-btn-outline-light"
                >
                  <span>Contact Us</span>
                  <i className="fas fa-phone ms-2"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
