import { ReactManagementPage } from './pages/ReactManagementPage';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { getToday } from './helpers/funcoesAuxiliares';
import { apiGetUserEndpoint } from './services/apiService';
import { LoginScreen } from './components/LoginScreen';

export default function App() {
  const mes = getToday().substring(0, 7);
  const [user, setUser] = useState(null);

  useEffect(() => {
    apiGetUserEndpoint().then(setUser, () => setUser(null));
  }, []);

  function signOut() {
    setUser(null);
  }

  if (user) {
    return (
      <Router>
        <Routes>
          <Route
            exact
            path="/despesas/:mes"
            element={<ReactManagementPage sair={signOut} usuario={user} />}
          ></Route>
          <Route path="*" element={<Navigate to={'/despesas/' + mes} />} />
        </Routes>
      </Router>
    );
  } else {
    return <LoginScreen entrar={setUser}></LoginScreen>;
  }
}
