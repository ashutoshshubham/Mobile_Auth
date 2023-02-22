import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PhoneSignUp from './components/PhoneSignUp';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/SignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route element={<Navigate to='/signup' />} path='/' />
          <Route element={<SignUp />} path='/signup' />
          <Route element={<Login />} path='/login' />
          <Route element={<PhoneSignUp />} path='/phonesignup' />
          <Route element={<ProtectedRoute><Home /></ProtectedRoute>} path='/home' />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
