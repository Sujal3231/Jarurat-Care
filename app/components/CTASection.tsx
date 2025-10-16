import { Container, Row, Col } from "react-bootstrap";

export default function CTASection(): JSX.Element {
  return (
    <section className="py-5 pq-bg-gradient-primary text-white">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h3 className="display-6 fw-bold mb-4">
              Together We Make a Difference
            </h3>
            <p className="lead mb-4">
              We work closely with healthcare providers, volunteers, and
              generous donors to reach those who need us most, ensuring that
              no one is left without the support they deserve.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="btn btn-light btn-lg px-4">
                <i className="fas fa-hand-holding-heart me-2"></i>
                Get Involved
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                <i className="fas fa-heart me-2"></i>
                Donate Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}