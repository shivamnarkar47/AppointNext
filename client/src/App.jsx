import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import LoginForm from "./_auth/forms/LoginForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import Overview from "./_root/pages/Overview";
import Appointments from "./_root/pages/Appointments";
import Doctors from "./_root/pages/Doctors";
import Message from "./_root/pages/Messages";
import Messages from "./_root/pages/Messages";
import Detailedappointment from "./_root/pages/Detailedappointment";
import AppointForm from "./_root/pages/AppointForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointmentForm" element={<AppointForm/>} />
          <Route path="/dappointments" element={<Detailedappointment/>} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
