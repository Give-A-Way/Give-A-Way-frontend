import { Link } from "react-router-dom";
const ListChurches = (props) => {

  return (
    <div>
      <h2>{props.title}</h2>
      <img
        width={343}
        height={201}
        src={props.churchImg}
      ></img>
      <p>
        {" "}
        <strong>Address:</strong> {props.address}
      </p>
      <p>
        <strong>Status:</strong> {props.status}
      </p>
      <button>
        <Link to={`${props.linkID}`}>Donate</Link>
      </button>
    </div>
  );
};
export default ListChurches