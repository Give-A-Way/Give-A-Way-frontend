import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../../context/Context";
import * as mdb from "mdb-ui-kit";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";



const ListChurches = (props) => {
  const navigate = useNavigate();
  const { isUserLogedIn } = useContext(Context);
  const [donateError, setDonateError] = useState("");
  return (
    <div>
      <MDBCard
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          width: "300px",
          height: "400px",
          margin: "10px 5px",
        }}
      >
        <MDBCardImage
          style={{ width: "300px", height: "200px" }}
          src={props.churchImg}
          position="top"
          alt={props.churchImg}
        />
        <MDBCardBody
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <MDBCardTitle>{props.title}</MDBCardTitle>
            <MDBCardText>{props.address}</MDBCardText>
          </div>
          <p style={{ margin: "5px 10px", color: "red", fontWeight:"bold" }}>{donateError}</p>
          {isUserLogedIn ? (

            <button
              style={{ backgroundColor: "#2ea44e", borderRadius: "10px", textDecoration: "none" }}
              onClick={() => { navigate(`/church/${props.linkID}`) }}
            >Donate
            </button>
          ) :
            <button
              onClick={() => { setDonateError("login first") }}
              style={{ backgroundColor: "#2ea44e", borderRadius: "10px", textDecoration: "none" }}
            >Donate</button>
              
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
export default ListChurches;
