import styled from "@emotion/styled"
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";

const ItemHolder = styled.div`
    display:  flex;
    width: 310px;
    height: ${props => props.heightOFdiv};
    border: ${props => props.border} solid #476e41;
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    border-radius: 20px;
    transition: 1s;
    background-color: gray;
    &[data-status = "true"]:hover{
        transform: scale(1.1);
        background-color: #7dff5f;
    }
    transform: ${props => props.displayItem};
`;
const CheckboxHolder = styled.div`
    position: relative;
    width: 30px;
`;
const Checkbox = styled.input`
    position: absolute;
    top: 0;
    left: 10px;
    right: 0;
    bottom: 0;
    margin: auto;
`;

const DonationDataContaner = styled.div`
    width: 310px;
`;
const TimeOfDonation = styled.div`
    font-size: 18px;
    && p{
        margin: 0;
    }
`;

const ChurchName = styled.p`
    margin: 8px 0 0 0
`
const CLocation = styled.p`
    font-size: 10px;
`;
export default function SlidingPaneItemPast(props) {
    const [displayItem, setDisplayItem] = useState("scale(1)")
    const [heightOFdiv, setHeightOFdiv] = useState("auto")
    const [hover, sethover] = useState("true")
    const [divMargin, setDivMargin] = useState("0 0 10px")
    const [clickedCheck, setClickedCheck] = useState(false)
    const [divPadding, setDivPadding] = useState("5px 5px")
    const [divBorder, setDivBorder] = useState("2px")
    useEffect(() => {
        async function upDateStatusOfDonation() {
            let requestOptions = {
                method: 'PATCH',
                redirect: 'follow'
            };
            await fetch(`https://give-a-way-backend-production.up.railway.app/listings/donation/${props.DId}`, requestOptions)
        }
        if (clickedCheck) {
            upDateStatusOfDonation()
            setTimeout(() => {
                setHeightOFdiv("0px")
                setDivPadding("0 0 0 0")
                setDivMargin("0")
                setDivBorder("0px")
            }, 2000)
        }
    }, [clickedCheck])
    // console.log("here")
    // console.log(props.date)
    return (
        <ItemHolder data-status={hover} displayItem={displayItem} heightOFdiv={heightOFdiv} padding={divPadding} margin={divMargin} border={divBorder}>
            <DonationDataContaner>
                <TimeOfDonation>
                    <p style={{ fontSize:"12px"  }}>Time of Donation:</p>
                </TimeOfDonation>
                
                <ChurchName>To: {props.cName}</ChurchName>
                <CLocation>Address: {props.cLocation}</CLocation>
                
                <p style={{ margin: "0",fontSize:"12px" }}>You Donated: {props.type}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.typeD}</p>
            </DonationDataContaner>
        </ItemHolder>
    )
}