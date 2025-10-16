import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

export default function ServicesSection(): JSX.Element {
  const services = [
    {
      icon: "fas fa-stethoscope",
      title: "Medical Consultation",
      description: "Professional medical consultations with experienced healthcare providers.",
      features: ["Expert Diagnosis", "Personalized Treatment", "Follow-up Care"]
    },
    {
      icon: "fas fa-ambulance",
      title: "Emergency Care",
      description: "Immediate medical attention for urgent healthcare needs.",
      features: ["24/7 Availability", "Rapid Response", "Critical Care"]
    },
    {
      icon: "fas fa-pills",
      title: "Medication Management",
      description: "Comprehensive medication guidance and management services.",
      features: ["Prescription Management", "Dosage Guidance", "Side Effect Monitoring"]
    }
  ];

  return (
    <section className="pq-services-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="pq-section-badge">Our Services</span>
            <h2 className="pq-section-title">Comprehensive Healthcare Solutions</h2>
            <p className="pq-section-description">
              We offer a wide range of medical services to meet all your healthcare needs with excellence and care.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="pq-service-card border-0 shadow-sm h-100">
      <Card.Body className="p-4">
        <div className="pq-service-icon">
          <i className={service.icon}></i>
        </div>
        <Card.Title className="pq-service-title">{service.title}</Card.Title>
        <Card.Text className="pq-service-description">
          {service.description}
        </Card.Text>
        <ul className="pq-service-features">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx}>
              <i className="fas fa-check-circle text-success me-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <Link href="#" className="pq-service-link">
          Learn More <i className="fas fa-arrow-right ms-2"></i>
        </Link>
      </Card.Body>
    </Card>
  );
}