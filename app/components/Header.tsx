'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const scrollToFooter = () => {
    setExpanded(false); // Close mobile menu
    
    // Use setTimeout to ensure the menu is closed before scrolling
    setTimeout(() => {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: scroll to bottom of page
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      {/* Main Navigation */}
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
            {/* Centered Navigation Links */}
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
            
            {/* Contact Us Button on the right */}
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

      <style jsx>{`
        .pq-navbar-custom {
          background-color: #eeeeeeff !important;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .nav-link-custom {
          color: #475569 !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          margin: 0 0.25rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #2490eb !important;
          background-color: #f1f5f9;
        }

        .nav-link-custom.active {
          color: #2490eb !important;
          background-color: #eff6ff;
        }

        .pq-nav-btn {
          background: linear-gradient(135deg, #2490eb 0%, #1a73e8 100%);
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(36, 144, 235, 0.2);
        }

        .pq-nav-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(36, 144, 235, 0.3);
          background: linear-gradient(135deg, #1a73e8 0%, #1557b0 100%);
        }

        /* Mobile menu styles */
        @media (max-width: 991px) {
          .pq-navbar-custom {
            background-color: #ffffff !important;
          }
          
          .nav-link-custom {
            margin: 0.25rem 0;
            text-align: center;
          }
          
          .pq-nav-btn {
            width: 100%;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}