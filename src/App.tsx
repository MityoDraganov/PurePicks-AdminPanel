import "./App.css";

import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./Pages/Login/Login";
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="overflow-hidden h-screen">
      <Toaster />
      <AuthProvider>
        
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
