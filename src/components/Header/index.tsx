import * as React from 'react';

import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      display="flex"
      alignItems={'center'}
      justifyContent={'flex-start'}
      width={'100%'}
      height={'80px'}
      sx={{
        borderBottom: '1px solid #E6E8F0',
      }}
    >
      <Typography
        color={'$brand-color-primary'}
        marginLeft={9}
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: "23px",

          lineHeight: "150%",
          letterSpacing: "2px"
        }}
      >
        NOMOS
      </Typography>
    </Box>
  );
}
