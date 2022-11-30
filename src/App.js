import Loginpage from "./components/loginpage";
import Landingpage from "./components/landingpage";
import {Routes, Route, Link, Navigate} from "react-router-dom"
import Churchers from "./components/churches";
import ChurchDetails from "./components/chruchDetails";

function App() {
  return (
    <div >
      <h1>hi there</h1>
      <Link to="/">home</Link>
      <Link to="login">login</Link>
      <Link to="church">church</Link>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/church" element={<Churchers />} />
        <Route path="/church/:id" element={<ChurchDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
