"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroSlider(): JSX.Element {
  const [index, setIndex] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Genuine commitment<br>to your health",
      subtitle: "Passion for caring",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      background: "/1.jpg",
      buttonText: "Read More",
      buttonLink: "/about",
    },
    {
      id: 2,
      title: "Orthopedic Treatment<br>Accute Pain",
      subtitle: "Great Experience In Building",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      background: "/2.jpg",
      buttonText: "Read More",
      buttonLink: "/about",
    },
    {
      id: 3,
      title: "Setting standards<br>in physiotherapy",
      subtitle: "higher level of care",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      background: "/3.jpg",
      buttonText: "Read More",
      buttonLink: "/about",
    },
  ];

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="pq-hero-slider position-relative">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={true}
        indicators={true}
        fade={true}
        pause={false}
        className="pq-hero-carousel"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className="pq-hero-slide">
            <div
              className="pq-hero-banner position-relative"
              style={{
                minHeight: "600px",
                display: "flex",
                alignItems: "center",
                padding: "150px 0",
              }}
            >
              {/* Background image */}
              <img
                src={slide.background}
                alt={slide.title.replace(/<br>/g, " ")}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />

              {/* Overlay content */}
              <Container style={{ position: "relative", zIndex: 2 }}>
                <Row>
                  <Col lg={6} className="pq-hero-content">
                    {/* Subtitle */}
                    <div className="pq-hero-subtitle mb-3">
                      <span
                        className="pq-section-sub-title pq-text-dark"
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h1
                      className="pq-hero-title mb-4"
                      style={{
                        fontSize: "64px",
                        fontWeight: "700",
                        lineHeight: "1.1",
                        marginBottom: "20px",
                      }}
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />

                    {/* Description */}
                    <p
                      className="pq-hero-description mb-5"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "rgba(16, 15, 15, 0.9)",
                        maxWidth: "500px",
                      }}
                    >
                      {slide.description}
                    </p>

                    {/* Button */}
                    <Link
                      href={slide.buttonLink}
                      className="pq-button pq-hero-button"
                    >
                      <div
                        className="pq-button-block"
                        style={{
                          background: "rgb(36, 144, 235)",
                          color: "var(--white)",
                          padding: "15px 30px",
                          fontSize: "14px",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <span className="pq-button-text">
                          {slide.buttonText}
                        </span>
                        <i className="fas fa-plus ms-2"></i>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Styles for Carousel */}
      <style jsx>{`
        .pq-hero-carousel {
          position: relative;
        }

        .pq-hero-carousel .carousel-control-prev,
        .pq-hero-carousel .carousel-control-next {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .pq-hero-slider:hover .carousel-control-prev,
        .pq-hero-slider:hover .carousel-control-next {
          opacity: 1;
        }

        .pq-hero-button:hover .pq-button-block {
          background: rgba(13, 39, 68, 1) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(20, 69, 123, 0.3);
        }

        .pq-hero-carousel .carousel-control-prev {
          left: 30px;
        }

        .pq-hero-carousel .carousel-control-next {
          right: 30px;
        }

        .pq-hero-carousel .carousel-control-prev-icon,
        .pq-hero-carousel .carousel-control-next-icon {
          width: 20px;
          height: 20px;
        }

        .pq-hero-carousel .carousel-indicators {
          bottom: 30px;
        }

        .pq-hero-carousel .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 5px;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
        }

        .pq-hero-carousel .carousel-indicators button.active {
          background-color: var(--white);
        }

        @media (max-width: 768px) {
          .pq-hero-title {
            font-size: 36px !important;
          }

          .pq-hero-banner {
            padding: 100px 0 !important;
            min-height: 500px !important;
            text-align: center;
          }

          .pq-hero-content {
            text-align: center;
          }

          .pq-hero-description {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
