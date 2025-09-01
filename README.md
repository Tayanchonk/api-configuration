# API Configuration Admin Panel

A modern admin configuration application built with React, ViteJS, MUI, Redux, and TypeScript. This application provides a comprehensive admin interface for managing API configurations with user authentication, navigation, and configuration management.

## Features

- 🔐 **Admin Authentication** - Secure login system with Redux state management
- 🎨 **Modern UI** - Material-UI (MUI) components for consistent design
- 🗺️ **Sidebar Navigation** - React Router DOM for seamless page routing
- 📱 **Responsive Design** - Collapsible sidebar and responsive layout
- ⚡ **Fast Development** - Vite for lightning-fast builds and hot reloading
- 🧪 **Testing** - Comprehensive unit tests with Vitest and Testing Library
- 🔧 **TypeScript** - Type safety throughout the application

## Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: ViteJS 7
- **UI Library**: Material-UI (MUI) 6
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Language**: TypeScript
- **Testing**: Vitest + Testing Library
- **Styling**: MUI Theme + Emotion

## Prerequisites

- Node.js 18+ 
- npm 8+

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd api-configuration
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI

## Usage

### Login
- Navigate to the application
- Use demo credentials: **admin** / **admin**
- You'll be redirected to the dashboard upon successful login

### Navigation
The application includes a sidebar with the following sections:
- **Dashboard** - Overview with statistics cards
- **Users** - User management with table view
- **Settings** - Application and API configuration
- **Security** - Security settings (placeholder)
- **Analytics** - Analytics dashboard (placeholder)

### Features
- **Responsive Sidebar** - Click the menu button to toggle sidebar visibility
- **Protected Routes** - All admin pages require authentication
- **State Management** - Redux handles authentication and application state
- **Type Safety** - Full TypeScript integration

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout with sidebar
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── ProtectedRoute.tsx # Route protection
├── pages/              # Page components
│   ├── Login.tsx       # Authentication page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Users.tsx       # User management
│   ├── Settings.tsx    # Application settings
│   ├── Security.tsx    # Security settings
│   └── Analytics.tsx   # Analytics dashboard
├── store/              # Redux store configuration
│   ├── index.ts        # Store setup
│   └── authSlice.ts    # Authentication slice
├── hooks/              # Custom React hooks
│   └── redux.ts        # Typed Redux hooks
├── types/              # TypeScript type definitions
│   └── index.ts        # Application types
├── test/               # Test files
│   ├── setup.ts        # Test configuration
│   └── Login.test.tsx  # Login component tests
├── theme.ts            # MUI theme configuration
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Configuration

### Theme Customization
The MUI theme can be customized in `src/theme.ts`:

```typescript
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    // ... other theme options
  },
});
```

### Environment Variables
Create a `.env` file for environment-specific configuration:

```env
VITE_API_BASE_URL=https://api.example.com
```

## Testing

The application includes comprehensive unit tests. Run tests with:

```bash
npm run test
```

Tests cover:
- Component rendering
- User interactions
- Authentication flow
- Navigation functionality

## Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update the sidebar navigation in `src/components/Sidebar.tsx`

### Adding New Features
1. Define types in `src/types/index.ts`
2. Create Redux slices if needed in `src/store/`
3. Build components in `src/components/`
4. Add tests in `src/test/`

## Deployment

1. Build the application:
```bash
npm run build
```

2. The `dist/` folder contains the production build
3. Deploy to your preferred hosting service (Vercel, Netlify, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run tests and linting
6. Submit a pull request

## License

This project is licensed under the MIT License.
