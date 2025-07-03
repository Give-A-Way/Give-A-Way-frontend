import Loginpage from "./components/loginpage";
import Landingpage from "./components/landingpage";
import { Routes, Route, Navigate } from "react-router-dom";
import Church from "./components/churches";
import ChurchDetails from "./components/chruchDetails";
import SignUpPage from "./components/signUp/sign-up";
import styled from "@emotion/styled";
import { useEffect, useContext } from "react";
import Context from "./context/Context"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Aboutpage from "./components/aboutpage";
import { getAllChurches } from "./adapters/churches";

const AppBodyHere = styled.div`
`;
function App() {
  const { setChurchData, doNate, isUserLogedIn, userData, setUserDonationsPledge } = useContext(Context)

  useEffect(() => {
    async function getUserData() {

      let getUserDonationsPledge = await fetch(`https://give-a-way-backend-production.up.railway.app/listings/user_id/${userData.id}`)
      // .then(response => response.json())
      setUserDonationsPledge(getUserDonationsPledge)
    }
    async function getData() {
      // let getChurchData = await fetch('https://give-a-way-backend-production.up.railway.app/listings').then(response => {
      //   console.log(response,"____________________________________________")
      //   return response.json()
      // })
      // setChurchData(getChurchData)

    }

    const loadUChurches = async () => {
      const [data, error] = await getAllChurches();
      if (error) {
        console.log(error)
      } else if (data) {
        console.log(data)
      };
    }
    loadUChurches();

    // getData()
    if (isUserLogedIn) {
      getUserData()
    }

  }, [setChurchData, doNate, isUserLogedIn, isUserLogedIn])
  return (
    <AppBodyHere>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="church" element={<Church />} />
        <Route path="church/:id" element={<ChurchDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppBodyHere>
  );
}

export default App;
