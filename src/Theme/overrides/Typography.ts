// ----------------------------------------------------------------------

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
    "$font-title-3": true;
    "$font-title-5": true;
    "$font-body-base": true;
    "$font-body-2": true;
    "$font-body-3": true;
  }
}

export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        '$font-title-3': {
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 700,
        },
        '$font-title-5': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 600,
        },
        '$font-body-base': {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
        },
        '$font-body-2': {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 600,
        },
        '$font-body-3': {
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: 400,
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
