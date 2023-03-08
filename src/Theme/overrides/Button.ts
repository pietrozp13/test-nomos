// ----------------------------------------------------------------------

export default function Button(theme) {

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          fontWeight: 700,
          boxShadow: 'none',
          padding: 16,
          backgroundColor: theme.palette['$brand-color-primary'],
          '& .MuiTouchRipple-root': {
            display: 'none',
          },
          '&:hover': {
            boxShadow: 'none',
            borderWidth: '2px',
            backgroundColor: theme.palette['$brand-color-secondary'],
          },
        },
        sizeLarge: {
          height: 68,
          width: 163,
          fontSize: 20,
        },
        sizeMedium: {
          height: 56,
          width: 130,
          fontSize: 16,
        },
        sizeSmall: {
          height: 32,
          width: 106,
          fontSize: 12,
          fontWeight: 500,
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            backgroundColor: '#fff',
          },
        },
      },
    },
  };
}
