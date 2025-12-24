import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AgentInfoList from './modules/cust/AgentInfoList';
import CustomerManagement from './modules/cust/CustomerManagement';
import MainLayout from './layouts/MainLayout';
import { Typography } from '@mui/material';

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
      <Typography variant="h4">MiPlatform to React Migration Demo</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        좌측 데모 목록:
      </Typography>
      <ul>
        <li><b>Agent Search (Pilot)</b>: 기존 파일럿 화면</li>
        <li><b>고객정보 관리</b>: [Phase 5] 신규 개발 화면 (Core Feature)</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomeContent />} />
            <Route path="/cust/agent-info-list" element={<AgentInfoList />} />
            <Route path="/cust/customer-management" element={<CustomerManagement />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
