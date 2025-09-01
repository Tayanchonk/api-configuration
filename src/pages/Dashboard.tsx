import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import {
  People,
  Settings,
  Security,
  Analytics,
} from '@mui/icons-material';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Welcome to the API Configuration Admin Panel
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ flex: '1 1 250px', minWidth: '250px' }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <People color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Users</Typography>
              </Box>
              <Typography variant="h4" component="div">
                24
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total registered users
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 250px', minWidth: '250px' }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Settings color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Configurations</Typography>
              </Box>
              <Typography variant="h4" component="div">
                12
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active configurations
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 250px', minWidth: '250px' }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Security color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Security</Typography>
              </Box>
              <Typography variant="h4" component="div">
                100%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Security score
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 250px', minWidth: '250px' }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Analytics color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Analytics</Typography>
              </Box>
              <Typography variant="h4" component="div">
                1.2K
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monthly API calls
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;