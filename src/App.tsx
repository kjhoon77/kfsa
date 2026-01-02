import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter, Navigate, Outlet, useRoutes } from 'react-router-dom';
import { GlobalDialogProvider } from './context/GlobalDialogContext';
import MainLayout from './layouts/MainLayout';
import { Typography } from '@mui/material';
import { menuData } from './modules/menuData';
import { generateRoutes } from './utils/routeGenerator';

// Wrapper to allow MainLayout to be used as a Layout Route
const AppLayout = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

function HomeContent() {
  return (
    <>
      <Typography variant="h4" gutterBottom>환영합니다.</Typography>
      <Typography variant="body1">
        상단 메뉴에서 원하는 기능을 선택해주세요.
      </Typography>
    </>
  );
}

// Generate routes only once
const dynamicRoutes = generateRoutes(menuData);

function AppRoutes() {
  // Combine static and dynamic routes
  const routes = useRoutes([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <HomeContent /> },
        ...dynamicRoutes,
      ]
    },
    { path: '*', element: <Navigate to="/" replace /> }
  ]);

  return routes;
}

function App() {
  console.log('App component rendering');
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalDialogProvider>
          <AppRoutes />
        </GlobalDialogProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
