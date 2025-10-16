'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Spinner, Alert, Toast, ToastContainer } from 'react-bootstrap';
import { RootState, AppDispatch } from '../redux/store';
import { fetchPatients, setSearchQuery, selectPatient, addPatient, deletePatient } from '../redux/patientsSlice';
import { PatientFormData } from '@/types/patient';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import SearchBar from '../components/SearchBar';
import AddPatientForm from '../components/AddPatientForm';

export default function PatientsPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { items, filteredItems, selectedPatient, searchQuery, loading, error } = useSelector((state: RootState) => state.patients);
  
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const handleViewDetails = (patient: Patient) => {
    dispatch(selectPatient(patient));
    setShowModal(true);
  };

  const handleAddPatient = (patientData: PatientFormData) => {
    dispatch(addPatient(patientData));
    setToastMessage(`Patient ${patientData.name} added successfully!`);
    setShowToast(true);
  };

  const handleDeletePatient = (patientId: number) => {
    const patientToDelete = items.find(p => p.id === patientId);
    dispatch(deletePatient(patientId));
    
    if (patientToDelete) {
      setToastMessage(`Patient ${patientToDelete.name} deleted successfully!`);
      setShowToast(true);
    }
    
    if (selectedPatient && selectedPatient.id === patientId) {
      setShowModal(false);
    }
  };

  // if (loading) {
  //   return (
  //     <Container className="my-5">
  //       <div className="pq-loading">
  //         <Spinner animation="border" role="status" variant="primary">
  //           <span className="visually-hidden">Loading...</span>
  //         </Spinner>
  //       </div>
  //     </Container>
  //   );
  // }

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <div className="pq-section pq-style-1 text-left">
            <span className="pq-section-sub-title">Patient Management</span>
            <h5 className="pq-section-title">Patient Records</h5>
            <p className="pq-section-description">
              Manage and view patient information in our comprehensive healthcare system.
            </p>
          </div>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" className="mb-4">
          <i className="fas fa-exclamation-triangle me-2"></i>
          Error loading patients: {error}
        </Alert>
      )}

      {/* Search and Add Section */}
      <Row className="mb-4">
        <Col md={8}>
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={handleSearch}
          />
        </Col>
        <Col md={4}>
          <Button 
            variant="success" 
            onClick={() => setShowAddForm(true)}
            className="w-100"
          >
            <i className="fas fa-plus me-2"></i>
            Add New Patient
          </Button>
        </Col>
      </Row>

      {/* Patients Count */}
      <Row className="mb-3">
        <Col>
          <div className="text-muted">
            Showing {filteredItems.length} of {items.length} patients
            {searchQuery && (
              <span> for "<strong>{searchQuery}</strong>"</span>
            )}
          </div>
        </Col>
      </Row>

      {/* Patients Grid */}
      <Row className="g-4">
        {filteredItems.map((patient) => (
          <Col key={patient.id} md={6} lg={4} xl={3}>
            <PatientCard 
              patient={patient} 
              onViewDetails={handleViewDetails}
              onDelete={handleDeletePatient}
            />
          </Col>
        ))}
      </Row>

      {filteredItems.length === 0 && !loading && (
        <Row className="text-center my-5">
          <Col>
            <div className="text-muted py-5">
              <i className="fas fa-users fa-3x mb-3"></i>
              <p>No patients found matching your search.</p>
              {searchQuery && (
                <Button 
                  variant="outline-primary" 
                  onClick={() => handleSearch('')}
                  className="mt-2"
                >
                  Clear Search
                </Button>
              )}
            </div>
          </Col>
        </Row>
      )}

      {/* Patient Details Modal */}
      <PatientModal 
        patient={selectedPatient}
        show={showModal}
        onHide={() => setShowModal(false)}
        onDelete={handleDeletePatient}
      />

      {/* Add Patient Form Modal */}
      <AddPatientForm 
        show={showAddForm}
        onHide={() => setShowAddForm(false)}
        onAddPatient={handleAddPatient}
      />

      {/* Success Toast */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}