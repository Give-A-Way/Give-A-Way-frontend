import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../../context/Context";

const ListChurches = (props) => {
  const { isUserLogedIn } = useContext(Context)
  const [donateError, setDonateError] = useState("")
  return (
    <div>
      <h2>{props.title}</h2>
      <img
        width={343}
        height={201}
        src={props.churchImg}
        alt={props.churchImg}
      />
      <p>
        {" "}
        <strong>Address:</strong> {props.address}
      </p>
      <p>
        <strong>Status:</strong> {props.status}
      </p>
      {isUserLogedIn ? <button>
        <Link to={`${props.linkID}`}>Donate</Link>
      </button> :
        <div style={{display:"flex"}}>
          <button onClick={() => { setDonateError("login first")}}>
            Donate
          </button>
          <p style={{ margin: "5px 10px" }}>{donateError}</p>
        </div>
      }
    </div>
  );
};
export default ListChurches