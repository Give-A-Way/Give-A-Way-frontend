import Loginpage from "./components/loginpage";
import Landingpage from "./components/landingpage";
import { Routes, Route, Link, Navigate } from "react-router-dom"
import Churchers from "./components/churches";
import ChurchDetails from "./components/chruchDetails";
import SignUpPage from "./components/signUp/sign-up";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/church" element={<Churchers />} />
        <Route path="/church/:id" element={<ChurchDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;