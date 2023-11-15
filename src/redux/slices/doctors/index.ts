import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Doctor {
    name: string;
}

interface DoctorState {
    doctors: Doctor[];
}

const initialState: DoctorState = {
    doctors: [],
};
  
export const doctorSlice = createSlice({
  name: 'doctors',
  initialState, 
  reducers: {
    addDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors.concat(action.payload)
    },
  },
})

export const { addDoctors } = doctorSlice.actions
export default doctorSlice.reducer