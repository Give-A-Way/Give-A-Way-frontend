import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import style from "@emotion/styled"
import "./form.scss"
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
    SetsubmissionData({
      time: e.target[0].value,
      description: e.target[1].value,
    });
    //invokes the function to fetch to the backend

    // updates the state and places the church donated to to the bottom of the page
    setdoNate(doNate + 1);
    // takes the user back to the hompage
    // goToHomePage();
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
      {/* <textarea class="textarea" placeholder="What would you like to donate?"></textarea> */}
      {/* <form onSubmit={changeStatus}>
        <label for="start">Enter the Date:</label>
        <input type="submit" value="Submit" />
      </form> */}
      <form onSubmit={changeStatus}>

        {/* <fieldset>
          <label for="firstName">Full name</label>
          <input type="text" name="name" id="firstName" placeholder="Optimus Prime" />
        </fieldset> */}
        {/* <fieldset>
          <legend>Type of Donation</legend>
          <input type="radio" id="radio1" name="radios" checked />
          <label for="radio1">Radio 1</label><br />
          <input type="radio" id="radio2" name="radios" />
          <label for="radio2">Radio 2</label><br />
          <input type="radio" id="radio3" name="radios" />
          <label for="radio3">Radio 3</label>
        </fieldset> */}
        <fieldset>
          <label for="select-choice">Type of Donation</label>
          <select name="select-choice" id="select-choice">
            <option value="Choice 1">- - select one - -</option>
            <option value="Choice 2">Food</option>
            <option value="Choice 3">Drinks</option>
            <option value="Choice 4">Clothes</option>
            <option value="Choice 5">Other</option>
            <option value="Choice 6">Money</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="textarea">Bio</label>
          <textarea name="textarea" id="textarea" placeholder="Tell us about yourself..."></textarea>
        </fieldset>

        {/* <fieldset>
          <legend>Group 1</legend>
          <input type="checkbox" id="check1" name="checkboxes" checked />
          <label for="check1">Checkbox 1</label><br />
          <input type="checkbox" id="check2" name="checkboxes" />
          <label for="check2">Checkbox 2</label><br />
          <input type="checkbox" id="check3" name="checkboxes" />
          <label for="check3">Checkbox 3</label>
        </fieldset> */}

        

        <input type="submit" value="Submit" id="button"/>
      </form>
    </ChurchComp>
  );
};

export default Details;
