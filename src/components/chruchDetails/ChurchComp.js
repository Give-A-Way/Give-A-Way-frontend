import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import style from "@emotion/styled"

const ChurchComp = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Details = (props) => {
  const { setdoNate, doNate, userData } = useContext(Context);
  const [submissionData, SetsubmissionData] = useState(null);
  // fetch call to backend server
  useEffect(() => {
    async function changeData() {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        id: props.id,
        user_id: userData.id,
        itemDescription: submissionData.description,
        time: submissionData.time,
      });

      let requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("localhost:3100/listings/church/1", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))

        .catch((error) => console.log("error", error));
      // const data = await fetch("http://localhost:3100/listings/:id", {
      //   method: "PATCH",
      //   headers: { "Content-type": "application/json" },
      //   body: JSON.stringify({ id: props.id })
      // }
      // ).then(response => response.json())
    }

    if (submissionData) {
      changeData();
    }
  }, [submissionData]);
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/church");
  };

  const changeStatus = (e) => {
    e.preventDefault();
    SetsubmissionData({
      time: e.target[0].value,
      description: e.target[1].value,
    });
    //invokes the function to fetch to the backend

    // updates the state and places the church donated to to the bottom of the page
    setdoNate(doNate + 1);
    // takes the user back to the hompage
    goToHomePage();
  };

  return (
    <ChurchComp>
      <h2>{props.title}</h2>
      <img
        width={343}
        height={201}
        src={props.churchImg}
        alt={props.churchImg}
      />
      <h4>{props.location}</h4>
      <textarea class="textarea" placeholder="What would you like to donate?"></textarea>
      <form onSubmit={changeStatus}>
        <label for="start">Enter the Date:</label>
        <input type="submit" value="Submit" />
      </form>
    </ChurchComp>
  );
};

export default Details;
