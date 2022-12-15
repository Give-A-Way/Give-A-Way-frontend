import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import styled from "@emotion/styled"
import "./form.scss"

import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

const ChurchComp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FormHolder = styled.div`
  margin: 40px 0 0 0
`;
const SidePanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
const ChurchImgHolder = styled.div`
margin-right: 70px;
padding-top: 30px;
`;
const Details = (props) => {
  const [dateWithInitialValue, setDateWithInitialValue] = React.useState(
    dayjs(new Date()),
  );
  const [minDayToDonate, setMinDayToDonate] = useState(null)
  const { setdoNate, doNate, userData } = useContext(Context);
  const [submissionData, SetsubmissionData] = useState(null);
  let cuurentDate = new Date()
  // fetch call to backend server
  useEffect(() => {
    setMinDayToDonate(`${cuurentDate.getFullYear()}-${cuurentDate.getMonth() + 1}-${cuurentDate.getDate()}T${cuurentDate.getUTCHours()}:${cuurentDate.getMinutes()}`)

    async function changeData() {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "id": props.id,
        "user_id": userData.id,
        "itemDescription": submissionData.description,
        "type": submissionData.type,
        "time": submissionData.time,
        "day": submissionData.day
      });

      let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch("http://localhost:3100/listings", requestOptions)
      setdoNate(doNate + 1);
      console.log(doNate)
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
    // YYYY / MM / DD hh:mm a
    e.preventDefault();
    let myTime = "" + (dateWithInitialValue.$H < 10 ? `0${dateWithInitialValue.$H}` : dateWithInitialValue.$H) + ":" + (dateWithInitialValue.$m < 10 ? `0${dateWithInitialValue.$m}` : dateWithInitialValue.$m)
    SetsubmissionData({
      type: e.target[1].value,
      description: e.target[3].value,
      time: myTime,
      day: `${dateWithInitialValue.$M + 1}/${dateWithInitialValue.$D}/${dateWithInitialValue.$y}`
    });
    rain()

    //invokes the function to fetch to the backend

    // updates the state and places the church donated to to the bottom of the page
    // takes the user back to the hompage
    setTimeout(() => {
      goToHomePage();
    }, 500)
  };

  return (
    <ChurchComp>
      <h2 id="title">{props.title}</h2>
      <SidePanel>
        <ChurchImgHolder>
          <img
            width={343}
            height={201}
            src={props.churchImg}
            alt={props.churchImg}
          />
          <h4 id="church-location" style={{
            color: "rgb(199, 246, 161)",
            fontFamily: `'Quicksand', sans-serif`}}>{props.location}</h4>
        </ChurchImgHolder>
        {/* <textarea class="textarea" placeholder="What would you like to donate?"></textarea> */}
        {/* <form onSubmit={changeStatus}>
        <label for="start">Enter the Date:</label>
        <input type="submit" className="cd-input" value="Submit" />
      </form> */}
        <FormHolder>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <MobileDateTimePicker
                className="here-i-am"
                value={dateWithInitialValue}
                onChange={(newValue) => {
                  console.log(newValue)
                  setDateWithInitialValue(newValue);
                }}
                label="select date of donation"
                onError={console.log}
                minDate={dayjs(minDayToDonate)}
                inputFormat="YYYY/MM/DD hh:mm a"
                mask="____/__/__ __:__ _M"
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <form onSubmit={changeStatus} id="cd-form">

            {/* <fieldset>
          <label for="firstName">Full name</label>
          <input type="text" name="name" id="firstName" className="cd-input" placeholder="Optimus Prime" />
        </fieldset> */}
            {/* <fieldset>
          <legend>Type of Donation</legend>
          <input type="radio" id="radio1" className="cd-input" name="radios" checked />
          <label for="radio1">Radio 1</label><br />
          <input type="radio" id="radio2" className="cd-input" name="radios" />
          <label for="radio2">Radio 2</label><br />
          <input type="radio" id="radio3" className="cd-input" name="radios" />
          <label for="radio3">Radio 3</label>
        </fieldset> */}
            <fieldset>
              <label htmlFor="select-choice">Type of Donation</label>
              <select className="cd-select" name="select-choice" id="select-choice">
                <option key="donation-type-choice-1" value="Choice 1">- - select one - -</option>
                <option key="donation-type-choice-2" value="Food">Food</option>
                <option key="donation-type-choice-3" value="Drinks">Drinks</option>
                <option key="donation-type-choice-4" value="Clothes">Clothes</option>
                <option key="donation-type-choice-6" value="Money">Money</option>
                <option key="donation-type-choice-5" value="Other">Other</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="textarea">Description of Donation</label>
              <textarea className="cd-textarea" name="textarea" id="textarea" placeholder="Description of Donation..."></textarea>
            </fieldset>

            {/* <fieldset>
          <legend>Group 1</legend>
          <input type="checkbox" id="check1" className="cd-input" name="checkboxes" checked />
          <label for="check1">Checkbox 1</label><br />
          <input type="checkbox" id="check2" className="cd-input" name="checkboxes" />
          <label for="check2">Checkbox 2</label><br />
          <input type="checkbox" id="check3" className="cd-input" name="checkboxes" />
          <label for="check3">Checkbox 3</label>
        </fieldset> */}


            <input type="submit" value="Submit" id="button" className="cd-input" />
          </form>
        </FormHolder>
      </SidePanel>

    </ChurchComp>
  );
};

export default Details;
