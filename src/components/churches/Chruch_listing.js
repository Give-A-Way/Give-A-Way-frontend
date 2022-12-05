import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../../context/Context";

const ListChurches = (props) => {
  const { isUserLogedIn } = useContext(Context)
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
      {isUserLogedIn? <button>
        <Link to={`${props.linkID}`}>Donate</Link>
      </button> : <h1>Must be loged in to donate</h1>
      }
    </div>
  );
};
export default ListChurches