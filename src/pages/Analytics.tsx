import React from 'react';
import { Typography, Box } from '@mui/material';

const Analytics: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Analytics
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Analytics dashboard and reports will be implemented here.
      </Typography>
    </Box>
  );
};

export default Analytics;