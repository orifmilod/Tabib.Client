"use client"
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
          main: '#4CAF50', 
          contrastText: "#fff"
        },
        secondary: {
          main: '#2196F3',
        },
        text: {
            primary: '#333333', 
            secondary: '#4F4F4F',
          },
      },
      spacing: 8, 
      typography: {
        fontFamily: 'Roboto, sans-serif', 
        fontSize: 14, 
        h1: {
          fontSize: '2rem',
          fontWeight: 600,
        },
        h2: {
          fontSize: '1.8rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 600,
        },
        h4: {
          fontSize: '1.2rem',
          fontWeight: 600,
        },
        h5: {
          fontSize: '1rem',
          fontWeight: 600,
        },
        h6: {
          fontSize: '0.8rem',
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: '1rem',
        },
        subtitle2: {
          fontSize: '0.8rem',
        },
        body1: {
          fontSize: '1rem',
        },
        body2: {
          fontSize: '0.8rem',
        },
      },
  });

  export default theme