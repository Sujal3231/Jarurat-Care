"use client";

import React, { ReactElement } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Patient } from "@/types/patient";

interface PatientCardProps {
  patient: Patient;
  onViewDetails: (patient: Patient) => void;
  onDelete: (patientId: number) => void;
}

export default function PatientCard({
  patient,
  onViewDetails,
  onDelete,
}: PatientCardProps): ReactElement {
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
    <Card className="h-100 patient-card shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="h6 mb-0 text-primary">{patient.name}</Card.Title>
          <Badge
            bg={getConditionVariant(patient.condition)}
            className="fs-7 d-flex align-items-center"
          >
            <i className={`fas ${getConditionIcon(patient.condition)} me-1`}></i>
            {patient.condition}
          </Badge>
        </div>

        <Card.Text className="text-muted small mb-2">
          <i className="fas fa-user me-2"></i>
          {patient.age} years old
        </Card.Text>

        <Card.Text className="small mb-2">
          <i className="fas fa-phone me-2"></i>
          {patient.contact}
        </Card.Text>

        <Card.Text className="small mb-3">
          <i className="fas fa-envelope me-2"></i>
          {patient.email}
        </Card.Text>

        <Card.Text className="small mb-3 text-truncate">
          <i className="fas fa-map-marker-alt me-2"></i>
          {patient.address}
        </Card.Text>

        <div className="mt-auto d-flex gap-2">
          <Button
            variant="outline-primary"
            size="sm"
            className="flex-fill"
            onClick={() => onViewDetails(patient)}
          >
            <i className="fas fa-eye me-1"></i>
            View
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onDelete(patient.id)}
          >
            <i className="fas fa-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
