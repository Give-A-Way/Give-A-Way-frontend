import ListChurches from "./Chruch_listing";
import styled from "@emotion/styled";
import NavCircle from "../navbar";
import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPaneItem from "./userDonations";
import SlidingPaneItemPast from "./pastDonations";
const ChurchesDiv = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 0 0 30px;
    margin: 0 5px 0 60px;
    width: 80%;
`
const SlidePanelHeader = styled.p`
  background-color: silver;
  margin: 0 0 30px;
`
const SlideButton = styled.button`
  border-radius: 20px;
  position: relative;
  top: -40px;
  transition: 3s;
  &:hover{
    transform: scale(1.1);
  }
`;
const MyPledges = styled.h1`
  color: rgb(199, 246, 161);
  font-family: ${`'Quicksand', sans-serif`};
  width: 330px;
`;
const ChurchHolders = styled.div`
  display: flex;
  margin: 100px 0 0 0;
`
const ListOfChurchesDonatedTO = styled.div`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  border-left: 4px solid #0f470a;
  width: 340px;
`;
const LogoHolder = styled.div`
  width: 124px;
  height: 124px;
  position: absolute;
  left: calc(50% - 70px);
  transform:scale(1.2);
`;
const C1 = styled.div`
  height: 100%;
  border-radius: 50%;
  border: 5px solid white;
  border-left-color: #091801;
  border-bottom-color: #091801;
  transform: rotate(45deg);
`;
const C2 = styled.div`
  height: 100%;
    border-radius: 50%;
    border: 5px solid white;
    border-top-left: 0px;
    transform: scale(.8);
`;
const S1 = styled.div`
  width: 62px;
  height: 62px;
  background-color: #091801;
  position: absolute; 
  top: 0;
`
const LgH = styled.h1`
  position: absolute; 
  top: 37px;
  color: white;
  font-size: 18px;
`;
export default function Church() {
  const { churchData, isUserLogedIn, userDonationsPledge, doNate, userData } = useContext(Context);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [rs,setRs] = useState(0)
  const [userPastData, setUserPastData] = useState([])

  const [listOfChurchesDonatedTO, setListOfChurchesDonatedTO] = useState("")
  useEffect(() => {
    if (isUserLogedIn && userDonationsPledge) {
      setListOfChurchesDonatedTO(
        userDonationsPledge?.map((val, i) => {
          return <SlidingPaneItem
            key={`donationKey${val.donation_id}`}
            setRs={setRs}
            rs={rs}
            date={val.schedule_time}
            type={val.type_of_donation}
            typeD={val.item_description}
            cName={val.church_name}
            cLocation={val.location}
            DId={val.donation_id}
            dayOf={val.day}
          />
        })
      )
    }
  }, [userDonationsPledge, doNate, churchData, isUserLogedIn])

  useEffect(() => {
    console.log(rs)
    async function getPastData() {
      let pastData = await fetch(`http://localhost:3100/listings/user_ids/past/${userData.id}`).then(response => response.json())
      setUserPastData(pastData)
    }
    if (isUserLogedIn) { 
      getPastData()
    }
  }, [isUserLogedIn, rs])
 
  const pastData = userPastData.map((val, i) => {
    console.log(val)
    return <SlidingPaneItemPast
        key={`Churchherekey${i}`}
      date={val.schedule_time}
      type={val.type_of_donation}
      typeD={val.item_description}
      cName={val.church_name}
      cLocation={val.location}
      DId={val.donation_id}
      dayOf={val.day}
      />
  });

  const listOfChurches = churchData.map((churches, i) => {
    return (
      <ListChurches
        key={`Churchkey${i}`}
        title={churches.church_name}
        churchImg={churches.img}
        address={churches.location}
        status={churches.status}
        linkID={churches.id}
        phone_number={churches.phone_number}
      />
    );
  });

  return (
    <div>
      <NavCircle
        style={{ position: "absolute", top: "10px" }}
      />
      <LogoHolder>
        <C1>
          <C2>
          </C2>
        </C1>

        <S1>
        </S1>
        <LgH>Give-A-Way</LgH>
      </LogoHolder>
      <div style={{
        marginTop: "50px",
        marginRight: "32px",
        display: "flex",
        justifyContent: "flex-end"
      }}>

        {/* {isUserLogedIn ? <SlideButton onClick={() => setState({ isPaneOpen: true })}>
          Donations pledge
        </SlideButton> : ""} */}
      </div>

      {/* <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="My commitments"
        from="right"
        width="400px"
        subtitle="Give-A-Way"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <SlidePanelHeader>Up coming donations</SlidePanelHeader>
        {listOfChurchesDonatedTO}
      </SlidingPane> */}
      <ChurchHolders>
        <div>
          <ChurchesDiv>
            {listOfChurches}
          </ChurchesDiv>
        </div>
        <ListOfChurchesDonatedTO>
          <MyPledges>My Pledges</MyPledges>
          {listOfChurchesDonatedTO}
          <h1 style={{ color: "white", fontFamily:"'Quicksand', sans-serif" }}>Past Donation</h1>
          {pastData ? pastData : ""}
        </ListOfChurchesDonatedTO>
      </ChurchHolders>

    </div>
  );
}
