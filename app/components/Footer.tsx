"use client"; 
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(): JSX.Element {
  return (
    <footer id="footer" className="pq-bg-primary-dark">
      <div className="pq-footer-style-1">
        <div className="pq-footer-top py-5">
          <Container>
            <Row>
              <Col lg={4} md={6} className="mb-4">
                <div className="pq-footer-block">
                  <h4 className="pq-text-white mb-4">Jarurat Care</h4>
                  <p className="pq-text-white">
                    Providing comprehensive healthcare services with compassion and advanced medical technology.
                  </p>
                  <div className="pq-footer-social mt-4">
                    <ul className="d-flex gap-3 list-unstyled">
                      <li><a href="#" className="pq-text-white"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" className="pq-text-white"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" className="pq-text-white"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#" className="pq-text-white"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <div className="pq-footer-block">
                  <h4 className="pq-text-white mb-4">Quick Links</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><Link href="/" className="pq-text-white text-decoration-none">Home</Link></li>
                    <li className="mb-2"><Link href="/patients" className="pq-text-white text-decoration-none">Patients</Link></li>
                    <li className="mb-2"><Link href="/about" className="pq-text-white text-decoration-none">About Us</Link></li>
                  </ul>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <div className="pq-footer-block">
                  <h4 className="pq-text-white mb-4">Contact Info</h4>
                  <ul className="list-unstyled pq-text-white">
                    <li className="mb-2">
                      <i className="fas fa-phone me-2"></i>
                      +1800-001-658
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-envelope me-2"></i>
                      info@jaruratcare.com
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Medical Street, Healthcare City
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="pq-copyright-footer py-3 pq-bg-primary">
          <Container>
            <Row>
              <Col className="text-center">
                <span className="pq-text-white">
                  &copy; 2024 Jarurat Care. All rights reserved.
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
}