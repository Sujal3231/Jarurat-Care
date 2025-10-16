"use client";

import { useState, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { PatientFormData } from "@/types/patient";

interface AddPatientFormProps {
  show: boolean;
  onHide: () => void;
  onAddPatient: (patientData: PatientFormData) => void;
}

export default function AddPatientForm({
  show,
  onHide,
  onAddPatient,
}: AddPatientFormProps): JSX.Element {
  const [formData, setFormData] = useState<PatientFormData>({
    name: "",
    age: "",
    contact: "",
    email: "",
    address: "",
    condition: "Stable",
  });

  const [errors, setErrors] = useState<Partial<PatientFormData>>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof PatientFormData, boolean>>
  >({});

  // ✅ React 19-safe callback ref for the Modal
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleRef = (node: HTMLDivElement | null) => {
    modalRef.current = node;
  };

  // 🧠 Validation Logic
  const validateForm = (): boolean => {
    const newErrors: Partial<PatientFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";
    else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0)
      newErrors.age = "Age must be a valid number";
    else if (Number(formData.age) > 150)
      newErrors.age = "Please enter a valid age";

    if (!formData.contact.trim()) newErrors.contact = "Contact is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🧾 Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onAddPatient(formData);
      setFormData({
        name: "",
        age: "",
        contact: "",
        email: "",
        address: "",
        condition: "Stable",
      });
      setErrors({});
      setTouched({});
      onHide();
    }
  };

  const handleBlur = (field: keyof PatientFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: keyof PatientFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      ref={handleRef} // ✅ React 19-safe callback ref
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fas fa-user-plus me-2"></i>
          Add New Patient
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  isInvalid={touched.name && !!errors.name}
                  placeholder="Enter patient's full name"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Age *</Form.Label>
                <Form.Control
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  onBlur={() => handleBlur("age")}
                  isInvalid={touched.age && !!errors.age}
                  placeholder="Enter age"
                  min="0"
                  max="150"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.age}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Contact Number *</Form.Label>
                <Form.Control
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => handleChange("contact", e.target.value)}
                  onBlur={() => handleBlur("contact")}
                  isInvalid={touched.contact && !!errors.contact}
                  placeholder="Enter contact number"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.contact}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  isInvalid={touched.email && !!errors.email}
                  placeholder="Enter email address"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group>
                <Form.Label>Address *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  onBlur={() => handleBlur("address")}
                  isInvalid={touched.address && !!errors.address}
                  placeholder="Enter full address"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group>
                <Form.Label>Medical Condition</Form.Label>
                <Form.Select
                  value={formData.condition}
                  onChange={(e) =>
                    handleChange(
                      "condition",
                      e.target.value as PatientFormData["condition"]
                    )
                  }
                >
                  <option value="Stable">Stable</option>
                  <option value="Critical">Critical</option>
                  <option value="Recovering">Recovering</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  Select the current medical condition of the patient
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            <i className="fas fa-save me-1"></i>
            Add Patient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
