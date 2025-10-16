"use client";

import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header(): ReactElement {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const scrollToFooter = () => {
    setExpanded(false); // Close mobile menu
    
    setTimeout(() => {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        className="pq-bottom-header pq-navbar-custom"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Container>
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
            <img 
              src="/jaruratlogo.webp" 
              alt="Jarurat Care" 
              width="70"
              height="50"
              className="img-fluid"
              style={{ objectFit: 'contain' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.outerHTML = '<div style="color: #2490eb; font-size: 24px; font-weight: bold;">Jarurat Care</div>';
              }}
            />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarSupportedContent" className="border-0" />
          
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                href="/" 
                className={`nav-link-custom ${pathname === '/' ? 'active fw-bold pq-text-primary' : ''}`}
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                href="/patients" 
                className={`nav-link-custom ${pathname === '/patients' ? 'active fw-bold pq-text-primary' : ''}`}
                onClick={() => setExpanded(false)}
              >
                Patients
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                href="/about" 
                className={`nav-link-custom ${pathname === '/about' ? 'active fw-bold pq-text-primary' : ''}`}
                onClick={() => setExpanded(false)}
              >
                About Us
              </Nav.Link>
            </Nav>
            
            <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
              <Button 
                variant="primary"
                className="btn pq-nav-btn"
                onClick={scrollToFooter}
              >
                Contact Us
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
