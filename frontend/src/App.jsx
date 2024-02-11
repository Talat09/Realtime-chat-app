// import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

// import SignUp from "./pages/signup/SignUp";
// import { useAuthContext } from "./context/AuthContext";
// import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Home />
      </div>
    </>
  );
}

export default App;
