import { Container, Row, Col, Card } from "react-bootstrap";

export default function TestimonialsSection(): JSX.Element {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "The care I received at Jarurat Care was exceptional. The doctors were compassionate and professional.",
      rating: 5,
      image: "/testimonials/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Family Member",
      content: "Outstanding support for my father during his treatment. The team went above and beyond.",
      rating: 5,
      image: "/testimonials/michael.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Patient",
      content: "The 24/7 support system made all the difference in my recovery journey. Highly recommended!",
      rating: 5,
      image: "/testimonials/priya.jpg"
    }
  ];

  return (
    <section className="pq-testimonials-section py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="pq-section-badge">Testimonials</span>
            <h2 className="pq-section-title">What Our Patients Say</h2>
            <p className="pq-section-description">
              Hear from our patients about their experiences with Jarurat Care.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} key={index}>
              <TestimonialCard testimonial={testimonial} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="pq-testimonial-card border-0 shadow-sm h-100">
      <Card.Body className="p-4">
        <div className="pq-testimonial-rating mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <i key={i} className="fas fa-star text-warning"></i>
          ))}
        </div>
        <Card.Text className="pq-testimonial-content mb-4">
          "{testimonial.content}"
        </Card.Text>
        <div className="pq-testimonial-author d-flex align-items-center">
          <div className="pq-testimonial-avatar me-3">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="rounded-circle"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <div>
            <h6 className="mb-1">{testimonial.name}</h6>
            <small className="text-muted">{testimonial.role}</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}