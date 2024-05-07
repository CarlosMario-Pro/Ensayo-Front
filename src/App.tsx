import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

// Registros
import RegisterUserPage from './pages/Register/00RegisterUserPage';
import LoginPageUser from './pages/Login/LoginPageUser';
import ConfigurationPage from './pages/03 Configuration/ConfigurationPage';

// PROTECCION DE RUTAS
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterUserPage />} />
          {/* Login */}
          <Route path='/login' element={<LoginPageUser />} />
          {/* Rutas Protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path='/configuration' element={<ConfigurationPage />} />                  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;