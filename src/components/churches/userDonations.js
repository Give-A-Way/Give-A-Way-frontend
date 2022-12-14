import styled from "@emotion/styled"
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";

const ItemHolder = styled.div`
    display:  flex;
    height: ${props => props.heightOFdiv};
    border: ${props => props.border} solid #476e41;
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    border-radius: 20px;
    transition: 2s;
    background-color: #72cd5d;
    &[data-status = "true"]:hover{
        transform: scale(1.1);
        background-color: #7dff5f;
    }
    transform: ${props => props.displayItem};
`;
const CLocation = styled.div`
    font-size: 10px;
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
export default function SlidingPaneItem(props) {
    const [displayItem, setDisplayItem] = useState("scale(1)")
    const [heightOFdiv, setHeightOFdiv] = useState("auto")
    const [hover, sethover] = useState("true")
    const [divMargin, setDivMargin] = useState("0 0 10px")
    const [clickedCheck, setClickedCheck] = useState(false)
    const { doNate, setdoNate } = useContext(Context)
    const [divPadding, setDivPadding] = useState("5px 5px")
    const [divBorder, setDivBorder] = useState("2px")
    useEffect(() => {
        async function upDateStatusOfDonation() {
            let requestOptions = {
                method: 'PATCH',
                redirect: 'follow'
            };
            await fetch(`http://localhost:3100/listings/donation/${props.DId}`, requestOptions)
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
    console.log("here")
    console.log(props.date)
    return (
        <ItemHolder data-status={hover} displayItem={displayItem} heightOFdiv={heightOFdiv} padding={divPadding} margin={divMargin} border={divBorder}>
            <DonationDataContaner>
                <p>{props.cName}</p>
                <CLocation>address: {props.cLocation}</CLocation>
                <p>{props.type}</p>
                <p>time of Donation</p>
                <p>{`${props.date.slice(5, 7) + "/" + props.date.slice(8, 10) + "/"  + props.date.slice(0, 4)  }`}</p>
                <p>at {`${(props.date.slice(11, 13) === '00' ? 12 : +props.date.slice(11, 13) >= 13 ? +props.date.slice(11, 13) - 12 : props.date.slice(11, 13) ) + ":" + props.date.slice(14, 16)}`+(+props.date.slice(11, 13) >= 12? "pm":"am" )}</p> 
            </DonationDataContaner>
            <CheckboxHolder>
                <Checkbox type="checkbox" onClick={() => {
                    setDisplayItem("scale(0)")
                    sethover(false)
                    setClickedCheck(true)
                    
                }} />
            </CheckboxHolder>
        </ItemHolder>
    )
}