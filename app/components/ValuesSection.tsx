import { Container, Row, Col } from "react-bootstrap";

type ValueItem = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export default function ValuesSection() {
  const values: ValueItem[] = [
    { title: "Compassion", description: "We treat every patient with empathy and care.", icon: "fas fa-heart", color: "danger" },
    { title: "Excellence", description: "Striving for the highest quality in healthcare services.", icon: "fas fa-star", color: "warning" },
    { title: "Integrity", description: "We maintain honesty and transparency in everything we do.", icon: "fas fa-shield-alt", color: "primary" },
    { title: "Innovation", description: "Constantly improving through technology and new ideas.", icon: "fas fa-lightbulb", color: "success" },
  ];

  return (
    <section className="pq-values-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5 text-center">
          <Col lg={8}>
            <span className="pq-section-badge">Our Core Values</span>
            <h2 className="pq-section-title">What Drives Us</h2>
            <p className="pq-section-description">
              At Jarurat Care, our values guide every decision we make and every patient we care for.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {values.map((value, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="pq-value-card text-center p-4 shadow-sm rounded h-100">
                <div className={`pq-value-icon mb-3 text-white bg-${value.color} rounded-circle d-inline-flex align-items-center justify-content-center`} style={{ width: 60, height: 60 }}>
                  <i className={value.icon}></i>
                </div>
                <h5 className="mb-2">{value.title}</h5>
                <p className="mb-0">{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
