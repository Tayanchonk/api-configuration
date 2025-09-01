import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  CssBaseline,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const drawerWidth = 240;

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: sidebarOpen ? `${drawerWidth}px` : 0,
          transition: (theme) =>
            theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            API Configuration Admin
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Sidebar open={sidebarOpen} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: sidebarOpen ? 0 : `-${drawerWidth}px`,
          transition: (theme) =>
            theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;