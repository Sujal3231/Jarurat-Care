import { Container, Row, Col } from "react-bootstrap";

type Feature = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: "fas fa-heartbeat",
      title: "Quality Care",
      description:
        "Providing exceptional medical care with compassion and expertise for all our patients.",
      color: "primary",
    },
    {
      icon: "fas fa-user-md",
      title: "Expert Doctors",
      description: "Our team of experienced healthcare professionals is dedicated to your well-being.",
      color: "success",
    },
    {
      icon: "fas fa-clock",
      title: "24/7 Service",
      description: "Round-the-clock medical services to ensure you receive care when you need it most.",
      color: "warning",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Patient Support",
      description: "Comprehensive support system for patients and caregivers throughout their journey.",
      color: "info",
    },
  ];

  return (
    <section className="pq-features-section py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="pq-section-badge">Why Choose Us</span>
            <h2 className="pq-section-title">Exceptional Healthcare Experience</h2>
            <p className="pq-section-description">
              We are committed to providing the highest quality medical care with compassion and innovation.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={3} md={6} key={index}>
              <FeatureCard feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="pq-feature-card">
      <div className="pq-feature-icon-wrapper">
        <div className={`pq-feature-icon bg-${feature.color} text-white`}>
          <i className={feature.icon}></i>
        </div>
      </div>
      <h5 className="pq-feature-title">{feature.title}</h5>
      <p className="pq-feature-description">{feature.description}</p>
    </div>
  );
}
