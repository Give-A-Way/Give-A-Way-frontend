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

const ChurchesDiv = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 80px;
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
export default function Church() {
  const { churchData, isUserLogedIn, userDonationsPledge, doNate } = useContext(Context);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [listOfChurchesDonatedTO, setListOfChurchesDonatedTO] = useState(null)
  useEffect(() => {
    setListOfChurchesDonatedTO(
      // userDonationsPledge ? userDonationsPledge.map((val,i) => {
      //   return <SlidingPaneItem
      //     key={`donationKey${i}`}
      //     date={val.schedule_time}
      //     type={val.item_description}
      //     cName={val.church_name}
      //     cLocation={val.location}
      //     DId={val.donation_id}
      //   />
      // }): null
    )
  }, [userDonationsPledge, doNate, churchData])

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
      <h1 style={{ textAlign: "center" }}>Church Donation page</h1>
      <div style={{
        marginTop: "50px",
        marginRight: "32px",
        display: "flex",
        justifyContent: "flex-end"
      }}>

        {isUserLogedIn ? <SlideButton onClick={() => setState({ isPaneOpen: true })}>
          Donations pledge
        </SlideButton> : ""}
      </div>
      <SlidingPane
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
        {
          userDonationsPledge?.map((val, i) => {
            return <SlidingPaneItem
              key={`donationKey${val.donation_id}`}
              date={val.schedule_time}
              type={val.item_description}
              cName={val.church_name}
              cLocation={val.location}
              DId={val.donation_id}
            />
          })
      }
      </SlidingPane>
      <ChurchesDiv>{listOfChurches}</ChurchesDiv>

    </div>
  );
}
