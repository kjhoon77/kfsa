import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { GlobalDialogProvider } from './context/GlobalDialogContext';
import AgentInfoList from './modules/cust/AgentInfoList';
import CustomerManagement from './modules/cust/CustomerManagement';
import EnvManagement from './modules/env/EnvManagement';
import ItemManagement from './modules/item/ItemManagement';
import MemberManagement from './modules/mem/MemberManagement';
import ProfessorManagement from './modules/profes/ProfessorManagement';
import ReportManagement from './modules/report/ReportManagement';
import AppointManagement from './modules/appoint/AppointManagement';
import PosEtcManagement from './modules/posetc/PosEtcManagement';
import OtherIncomeManagement from './modules/otherincome/OtherIncomeManagement';
import LocalServiceManagement from './modules/local-svc/LocalServiceManagement';
import TrainingManagement from './modules/training/TrainingManagement';
import SysManagement from './modules/sys/SysManagement';
import SpclEduManagement from './modules/spcledu/SpclEduManagement';
import Report30Management from './modules/report30/Report30Management';
import MainLayout from './layouts/MainLayout';
import { Typography } from '@mui/material';
import EduJubsuManagement from './modules/cust/edu/EduJubsuManagement';
import CustomerFeeManagement from './modules/cust/fee/CustomerFeeManagement';
import DataConnectionManagement from './modules/cust/data/DataConnectionManagement';

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
        좌측 메뉴에서 원하는 기능을 선택해주세요.
      </Typography>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalDialogProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomeContent />} />
              <Route path="/cust/agent-info-list" element={<AgentInfoList />} />
              <Route path="/cust/customer-management" element={<CustomerManagement />} />
              <Route path="/cust/edu-jubsu-management" element={<EduJubsuManagement />} />
              <Route path="/cust/customer-fee-management" element={<CustomerFeeManagement />} />
              <Route path="/cust/data-connection-management" element={<DataConnectionManagement />} />
              <Route path="/mem/management" element={<MemberManagement />} />
              <Route path="/profes/management" element={<ProfessorManagement />} />
              <Route path="/item/management" element={<ItemManagement />} />
              <Route path="/env/management" element={<EnvManagement />} />
              <Route path="/report/management" element={<ReportManagement />} />
              <Route path="/appoint/management" element={<AppointManagement />} />
              <Route path="/posetc/management" element={<PosEtcManagement />} />
              <Route path="/otherincome/management" element={<OtherIncomeManagement />} />
              <Route path="/localsvc/management" element={<LocalServiceManagement />} />
              <Route path="/training/management" element={<TrainingManagement />} />
              <Route path="/sys/management" element={<SysManagement />} />
              <Route path="/spcledu/management" element={<SpclEduManagement />} />
              <Route path="/report30/management" element={<Report30Management />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </GlobalDialogProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
