import { Container, Row, Col, Card } from "react-bootstrap";

export default function ValuesSection(): JSX.Element {
  const values = [
    {
      letter: "R",
      title: "Reach",
      description: "We actively connect with cancer patients, caregivers, and communities across India, ensuring that our support is accessible to those who need it most.",
      color: "primary",
      icon: "fas fa-network-wired",
    },
    {
      letter: "I",
      title: "Impact",
      description: "We focus on delivering meaningful interventions that make a real difference in the lives of those affected by cancer, from emotional support to practical care.",
      color: "success",
      icon: "fas fa-bullseye",
    },
    {
      letter: "S",
      title: "Sustain",
      description: "We are committed to providing ongoing assistance, ensuring that our programs and services offer continuous care and stability throughout the cancer journey.",
      color: "warning",
      icon: "fas fa-infinity",
    },
    {
      letter: "E",
      title: "Evolve",
      description: "We adapt and grow to meet the changing needs of the cancer community, continuously improving our services and expanding our reach.",
      color: "info",
      icon: "fas fa-seedling",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="pq-badge bg-primary text-white px-3 py-2 rounded-pill mb-3 d-inline-block">
              Our Values
            </span>
            <h2 className="display-6 fw-bold mb-3">
              The Principles That Guide Everything We Do
            </h2>
            <p className="text-muted">
              Our core values shape our approach to cancer care and support
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

// Sub-component for individual value cards
function ValueCard({ value }: { value: any }) {
  return (
    <Col md={6} lg={3}>
      <Card className="text-center border-0 shadow-sm pq-value-card h-100">
        <Card.Body className="p-4">
          <div
            className={`pq-value-letter bg-${value.color} text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center`}
            style={{
              width: "60px",
              height: "60px",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {value.letter}
          </div>
          <i className={`${value.icon} fa-2x pq-text-${value.color} mb-3`}></i>
          <Card.Title className="h5 mb-3">{value.title}</Card.Title>
          <Card.Text className="text-muted small">
            {value.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}