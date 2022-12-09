import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../../context/Context";
import * as mdb from 'mdb-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const ListChurches = (props) => {
  const { isUserLogedIn } = useContext(Context)
  const [donateError, setDonateError] = useState("")
  return (
    <div>
    


      <MDBCard style={{ width: "300px", height: "400px", margin: "10px 5px" }}>
        <MDBCardImage style={{ width: "300px", height: "200px" }} src={props.churchImg} position='top' alt={props.churchImg} />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
            {props.address}
          </MDBCardText>
          {isUserLogedIn ? <button href='#'><Link to={`${props.linkID}`}>Donate</Link></button > :
            <div style={{ display: "flex" }}>
              <button  
                href="#"
                onClick={(e) => {
                e.preventDefault(); 
                setDonateError("login first");
                }}>Donate</button>
              <p style={{ margin: "5px 10px" }}>{donateError}</p>
            </div>
          }
        </MDBCardBody>
      </MDBCard>




      {/* {isUserLogedIn ? <button>
        <Link to={`${props.linkID}`}>Donate</Link>
      </button> :
        <div style={{ display: "flex" }}>
          <button onClick={() => { setDonateError("login first") }}>
            Donate
          </button>
          <p style={{ margin: "5px 10px" }}>{donateError}</p>
        </div>
      } */}
    </div>
  );
};
export default ListChurches