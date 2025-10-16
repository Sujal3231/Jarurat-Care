import { Container, Row, Col, Card } from "react-bootstrap";

type TeamMember = {
  name: string;
  position: string;
  image: string;
};

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    { name: "Olivia Mestreza", position: "Patient Support Lead", image: "/team/olivia.jpg" },
    { name: "Richard Mills", position: "Care Coordination", image: "/team/richard.jpg" },
    { name: "Vera Bessett", position: "Community Services Lead", image: "/team/vera.jpg" },
    { name: "Sophie Chamberlain", position: "Specialised Support", image: "/team/sophie.jpg" },
    { name: "Erik Anders", position: "VP of Operations", image: "/team/erik.jpg" },
    { name: "Nathan Carter", position: "Outreach Coordinator", image: "/team/nathan.jpg" },
  ];

  return (
    <section className="py-5 bg-light">
      <Container fluid>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-6 fw-bold mb-3">Our Team</h2>
            <p className="text-muted">Dedicated professionals committed to making a difference</p>
          </Col>
        </Row>
        <div className="pq-team-scroll-container">
          <div className="pq-team-scroll-wrapper">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="pq-team-item">
      <Card className="border-0 shadow-sm h-100 pq-team-card">
        <Card.Body className="p-4 text-center">
          <div className="pq-team-img-wrapper mx-auto mb-4">
            <img src={member.image} alt={member.name} className="pq-team-img rounded-circle" />
          </div>
          <Card.Title className="h5 mb-2">{member.name}</Card.Title>
          <Card.Text className="text-muted mb-0">{member.position}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
