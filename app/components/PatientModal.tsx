"use client";

import React, { ReactElement } from "react";
import { Modal, Button, Row, Col, Badge } from "react-bootstrap";
import { Patient } from "@/types/patient";

interface PatientModalProps {
  patient: Patient | null;
  show: boolean;
  onHide: () => void;
  onDelete: (patientId: number) => void;
}

export default function PatientModal({
  patient,
  show,
  onHide,
  onDelete,
}: PatientModalProps): ReactElement {
  if (!patient) return <></>;

  const getConditionVariant = (condition: Patient["condition"]) => {
    switch (condition) {
      case "Stable":
        return "success";
      case "Critical":
        return "danger";
      case "Recovering":
        return "warning";
      default:
        return "secondary";
    }
  };

  const getConditionIcon = (condition: Patient["condition"]) => {
    switch (condition) {
      case "Stable":
        return "fa-check-circle";
      case "Critical":
        return "fa-exclamation-triangle";
      case "Recovering":
        return "fa-heartbeat";
      default:
        return "fa-user";
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fas fa-user me-2"></i>
          Patient Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-primary mb-0">{patient.name}</h4>
              <Badge
                bg={getConditionVariant(patient.condition)}
                className="fs-6 d-flex align-items-center"
              >
                <i className={`fas ${getConditionIcon(patient.condition)} me-1`}></i>
                {patient.condition}
              </Badge>
            </div>
            <p className="text-muted mb-0">Patient ID: #{patient.id}</p>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md={6}>
            <div className="border rounded p-3 h-100">
              <h6 className="text-muted mb-3">
                <i className="fas fa-id-card me-2"></i>
                Personal Information
              </h6>
              <div className="small">
                <div className="mb-3">
                  <strong className="text-muted">Age:</strong>
                  <br />
                  <span className="fs-6">{patient.age} years old</span>
                </div>
                <div className="mb-3">
                  <strong className="text-muted">Contact:</strong>
                  <br />
                  <span className="fs-6">{patient.contact}</span>
                </div>
                <div className="mb-3">
                  <strong className="text-muted">Email:</strong>
                  <br />
                  <span className="fs-6">{patient.email}</span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="border rounded p-3 h-100">
              <h6 className="text-muted mb-3">
                <i className="fas fa-map-marker-alt me-2"></i>
                Address & Medical Status
              </h6>
              <div className="small">
                <div className="mb-3">
                  <strong className="text-muted">Address:</strong>
                  <br />
                  <span className="fs-6">{patient.address}</span>
                </div>
                <div>
                  <strong className="text-muted">Medical Condition:</strong>
                  <br />
                  <Badge
                    bg={getConditionVariant(patient.condition)}
                    className="mt-1 fs-6"
                  >
                    <i className={`fas ${getConditionIcon(patient.condition)} me-1`}></i>
                    {patient.condition}
                  </Badge>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {patient.condition === "Critical" && (
          <Row className="mt-3">
            <Col>
              <div className="alert alert-warning d-flex align-items-center mb-0">
                <i className="fas fa-exclamation-triangle fa-2x me-3"></i>
                <div>
                  <strong>Critical Condition</strong>
                  <br />
                  <small>This patient requires immediate attention and monitoring.</small>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => {
            onDelete(patient.id);
            onHide();
          }}
        >
          <i className="fas fa-trash me-1"></i>
          Delete Patient
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
