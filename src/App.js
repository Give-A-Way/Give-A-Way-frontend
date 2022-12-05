import Loginpage from "./components/loginpage";
import Landingpage from "./components/landingpage";
import { Routes, Route, Navigate } from "react-router-dom";
import Church from "./components/churches";
import ChurchDetails from "./components/chruchDetails";
import SignUpPage from "./components/signUp/sign-up";
import styled from "@emotion/styled";
import { useEffect, useContext} from "react";
import Context from "./context/Context"

const AppBodyHere = styled.div`
  background-color:gray;
`;
function App() {
  const { setChurchData, doNate } = useContext(Context)

  useEffect(() => { 
    async function getData() {
      let getChurchData = await fetch("http://localhost:3100/listings") .then(response => response.json())
      setChurchData(getChurchData)
    }
    console.log("hi")
    getData()
  }, [setChurchData, doNate])
  return (
    <AppBodyHere>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="church" element={<Church />} />
        <Route path="church/:id" element={<ChurchDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppBodyHere>
  );
}

export default App;
