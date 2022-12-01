import Loginpage from "./components/loginpage";
import Landingpage from "./components/landingpage";
import { Routes, Route, Navigate } from "react-router-dom";
import Churchers from "./components/churches";
import ChurchDetails from "./components/chruchDetails";
import SignUpPage from "./components/signUp/sign-up";
import styled from "@emotion/styled";

const AppBody = styled.div`
  background-color:gray;
`;
function App() {
  return (
    <AppBody>
    

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/church" element={<Churchers />} />
        <Route path="/church/:id" element={<ChurchDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppBody>
  );
}

export default App;
