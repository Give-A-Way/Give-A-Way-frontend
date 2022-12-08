import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

const Details = (props) => {
  const { setdoNate, doNate } = useContext(Context)
  async function changeData() {
    const data = await fetch("http://localhost:3100/listings/:id", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: props.id })
    }
    ).then(response => response.json())

  }
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/church');
  } 
  const changeStatus = (e) => {
    e.preventDefault();
    changeData()
    setdoNate(doNate+1)
    goToHomePage()
  }

  return (
    <div>
      <h2>{props.title}</h2>

      <img
        width={343}
        height={201}
        src={props.churchImg}
        alt={props.churchImg}
      />
      <h4>{props.location}</h4>
      <form onSubmit={changeStatus}>
        <label for="start">
          Enter the Date:
        </label>
        <input type="submit" value="Submit" />
      </form>


      {/* time and date implementation
      useState to update what the user is donating */}
    </div>
  );
};

export default Details;
