import React from 'react';
import { Typography, Box } from '@mui/material';

const Security: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Security
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Security configuration and monitoring will be implemented here.
      </Typography>
    </Box>
  );
};

export default Security;