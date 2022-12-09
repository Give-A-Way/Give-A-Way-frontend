import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

const Details = (props) => {
  const { setdoNate, doNate } = useContext(Context)
  // fetch call to backend server
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
  const rain = useCallback(() => {
    confetti({
      particleCount: 400,
      spread: 200
    });
  }, []);
  const changeStatus = (e) => {
    rain()
    e.preventDefault();
    //invokes the function to fetch to the backend
    changeData()
    // updates the state and places the church donated to to the bottom of the page
    setdoNate(doNate+1)
    // takes the user back to the hompage
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
    </div>
  );
};

export default Details;
