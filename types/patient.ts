export interface Patient {
  id: number;
  name: string;
  age: number;
  contact: string;
  email: string;
  address: string;
  condition: 'Stable' | 'Critical' | 'Recovering';
}

export interface PatientFormData {
  name: string;
  age: string;
  contact: string;
  email: string;
  address: string;
  condition: 'Stable' | 'Critical' | 'Recovering';
}

export interface PatientsState {
  items: Patient[];
  filteredItems: Patient[];
  selectedPatient: Patient | null;
  searchQuery: string;
  loading: boolean;
  error: string | null;
}