import ListChurches from "./Chruch_listing";
import styled from "@emotion/styled";
import NavCircle from "../navbar";
import { useContext } from "react";
import Context from "../../context/Context";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { Component, useState } from "react";
import { render } from "react-dom";

const ChurchesDiv = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 80px;
`

export default function Church() {
  const { churchData, isUserLogedIn } = useContext(Context);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  console.log(churchData)
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
      <h1 style={{textAlign: "center" } }>Church Donation page</h1>
      <div style={{
        marginTop: "50px",
        marginRight: "32px",
        display: "flex",
        justifyContent: "flex-end"

      }}>

        <button onClick={() => setState({ isPaneOpen: true })}>
          Past donations
        </button>
      </div>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Time Stamp?"
        from="right"
        width="400px"
        subtitle="Give-A-Way"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
        <img src="img.png" />
      </SlidingPane>
      <ChurchesDiv>{listOfChurches}</ChurchesDiv>

    </div>
  );
}
