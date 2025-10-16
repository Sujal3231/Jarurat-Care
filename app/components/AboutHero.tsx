import { Container, Row, Col } from "react-bootstrap";

export default function AboutHero(): JSX.Element {
  return (
    <section className="pq-bg-gradient-primary text-white py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <span className="pq-section-sub-title text-dark mb-2 d-block">
              ABOUT US
            </span>
            <h1 className="display-5 fw-bold mb-4">
              Welcome to Jarurat Care Foundation
            </h1>
            <p className="lead mb-0">
              At Jarurat Care Foundation, we understand that facing cancer can
              be overwhelming, and no one should have to go through it alone.
              That's why we've made it our mission to stand by those affected
              by cancer, offering unwavering support every step of the way.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}