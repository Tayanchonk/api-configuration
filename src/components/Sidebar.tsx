import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import {
  Dashboard,
  Settings,
  People,
  Security,
  Analytics,
  Logout,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { logout } from '../store/authSlice';

const drawerWidth = 240;

interface SidebarProps {
  open: boolean;
}

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  { text: 'Users', icon: <People />, path: '/users' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
  { text: 'Security', icon: <Security />, path: '/security' },
  { text: 'Analytics', icon: <Analytics />, path: '/analytics' },
];

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Admin Panel
        </Typography>
      </Toolbar>
      <Divider />
      <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;