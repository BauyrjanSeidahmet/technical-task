import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({OnChangeInput}) {

  return (
    <Box
      mr={4}
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="ID of User" id="fullWidth" onChange ={(e) => OnChangeInput(e)}/>
    </Box>
  );
}