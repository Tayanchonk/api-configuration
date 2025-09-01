import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  TextField,
  Button,
  Box,
} from '@mui/material';

const Settings: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Configure your application settings
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
        <Box sx={{ flex: '1 1 400px', minWidth: '400px' }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                General Settings
              </Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Application Name"
                  defaultValue="API Configuration"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Admin Email"
                  defaultValue="admin@example.com"
                  sx={{ mb: 2 }}
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Enable notifications"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 400px', minWidth: '400px' }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                API Settings
              </Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="API Base URL"
                  defaultValue="https://api.example.com"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Rate Limit (requests/minute)"
                  type="number"
                  defaultValue="1000"
                  sx={{ mb: 2 }}
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Enable API logging"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="outlined">
          Reset
        </Button>
        <Button variant="contained">
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;