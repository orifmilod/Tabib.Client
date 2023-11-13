"use client"
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

const doctorsData: Doctor[] = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist' },
  { id: 3, name: 'Dr. James Brown', specialty: 'Orthopedic Surgeon' },
  // Add more doctors/specialists as needed
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // background: 'linear-gradient(to right, #141e30, #243b55)',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const LandingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  const handleSearch = () => {
    // Implement search functionality based on the searchQuery and selectedSpecialty
    return doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedSpecialty === '' || doctor.specialty === selectedSpecialty)
    );
  };

  return (
    <StyledPaper elevation={3}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Search Doctors"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="specialty-label">Specialty</InputLabel>
            <Select
              label="Specialty"
              labelId="specialty-label"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value as string)}
            >
              <MenuItem value="">All Specialties</MenuItem>
              <MenuItem value="Cardiologist">Cardiologist</MenuItem>
              <MenuItem value="Dermatologist">Dermatologist</MenuItem>
              <MenuItem value="Orthopedic Surgeon">Orthopedic Surgeon</MenuItem>
              {/* Add more specialties as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      {/* Render search results or other content here */}
    </StyledPaper>
  );
};

export default LandingPage;
