import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Patient, PatientsState, PatientFormData } from '@/types/patient';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      const patients: Patient[] = response.data.map((user: any, index: number) => ({
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * 50) + 20,
        contact: user.phone,
        email: user.email,
        address: `${user.address.street}, ${user.address.city}`,
        condition: ['Stable', 'Critical', 'Recovering'][index % 3] as 'Stable' | 'Critical' | 'Recovering'
      }));
      return patients;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch patients');
    }
  }
);

const initialState: PatientsState = {
  items: [],
  filteredItems: [],
  selectedPatient: null,
  searchQuery: '',
  loading: false,
  error: null,
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredItems = state.items.filter(patient =>
        patient.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    selectPatient: (state, action: PayloadAction<Patient>) => {
      state.selectedPatient = action.payload;
    },
    addPatient: (state, action: PayloadAction<PatientFormData>) => {
      const newPatient: Patient = {
        ...action.payload,
        id: Math.max(0, ...state.items.map(p => p.id)) + 1,
        age: parseInt(action.payload.age),
      };
      state.items.unshift(newPatient);
      state.filteredItems.unshift(newPatient);
    },
    deletePatient: (state, action: PayloadAction<number>) => {
      const patientId = action.payload;
      state.items = state.items.filter(patient => patient.id !== patientId);
      state.filteredItems = state.filteredItems.filter(patient => patient.id !== patientId);
      
      // Clear selected patient if it's the one being deleted
      if (state.selectedPatient && state.selectedPatient.id === patientId) {
        state.selectedPatient = null;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action: PayloadAction<Patient[]>) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery, selectPatient, addPatient, deletePatient, clearError } = patientsSlice.actions;
export default patientsSlice.reducer;