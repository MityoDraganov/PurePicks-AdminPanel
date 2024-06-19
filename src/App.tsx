import "./App.css";

import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./Pages/Login/Login";
import { SideBar } from "./components/SideBar";
import { Toaster } from "./components/ui/toaster";
import { Users } from "./Pages/Users/Users";

function App() {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <div className="flex gap-[5%] overflow-hidden h-screen">
          <SideBar />

          <Routes>
            <Route path="login" element={<Login />} />

            <Route path="users" element={<Users />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
