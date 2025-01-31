import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Bottombar/Footer';
import Booking from './Pages/Booking/Booking';
import Integrations from './Pages/Integrations/integrations';
import Accounts from './Pages/Accounts/Accounts';
import SignupPage from './Pages/SignUp/Signup';
import { useSelector } from 'react-redux';
import { selectUserDetails } from './redux/slice/userSlice';
import Form from './Pages/Form/Form';
import Sidebar from './Components/Sidebar/Sidebar';
import CreateAccount from './Pages/Accounts/CreateAccount';
import AddIntegration from './Pages/Integrations/AddIntegrations';
import KnowledgeConfig from './Pages/KnowledgeConfig/KnowledgeConfig';
import CreateKnowledge from './Pages/KnowledgeConfig/CreateKnowledge';
import Subscriptions from './Pages/Subscriptions/Subscriptions';
import SubscribeDetails from './Pages/Subscriptions/SubscribeDetails';
import ContactSales from './Pages/ContactSales/ContactSales';
import ManageIntegration from './Pages/Integrations/ManageIntegration';
import Performance from './Pages/performance/Performance';

function App() {
  const location = useLocation();
  const user = useSelector(selectUserDetails);

  const isSidebarPage = location.pathname.includes('/accounts') || location.pathname.includes('/integrations') || location.pathname.includes('/knowledgeConfiguration') || location.pathname.includes('/subscriptions');

  return (
    <div className="App">
      {location.pathname === '/' && <Navbar />}
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        {isSidebarPage && <Sidebar />}

        <div className={isSidebarPage ? 'content-wrapper' : ''}>
          <Routes>
            <Route exact path="/" element={!user ? <Landing /> : <Navigate to="/accounts" />} />
            <Route exact path="/book" element={<Booking />} />
            <Route exact path="/contactSales" element={<ContactSales />} />

            <Route exact path="/accounts" element={<Accounts />} />
            <Route exact path="/integrations" element={<Integrations />} />
            <Route exact path="/manageIntegration" element={<ManageIntegration />} />
            <Route exact path="/knowledgeConfiguration" element={<KnowledgeConfig />} />
            <Route exact path="/subscriptions" element={<Subscriptions />} />
            <Route exact path="/accounts/create" element={<CreateAccount />} />
            <Route exact path="/accounts/update/:id" element={<CreateAccount />} />
            <Route exact path="/knowledgeConfiguration/create" element={<CreateKnowledge />} />
            <Route exact path="/integrations/add" element={<AddIntegration />} />
            <Route exact path="/performance" element={<Performance />} />

            <Route exact path="/subscriptions/detail" element={<SubscribeDetails /> } />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/signup" element={user ? <Navigate to="/book" /> : <SignupPage type={"signup"} />} />
            <Route exact path="/login" element={<SignupPage type={"login"} />} />
          </Routes>

          {location.pathname === "/" && <Footer />}
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
