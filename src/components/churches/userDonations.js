import styled from "@emotion/styled"
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";

const ItemHolder = styled.div`
    display:  ${props => props.heightOFdiv};
    border: 2px solid black;
    padding: 5px 5px;
    margin: 0 0 10px;
    border-radius: 20px;
    transition: 2s;
    background-color:#a15aea;
    &[data-status = "true"]:hover{
        transform: scale(1.1);
        background-color:#e98fff;
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
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`;

export default function SlidingPaneItem(props) {
    const [displayItem, setDisplayItem] = useState("scale(1)")
    const [heightOFdiv, setHeightOFdiv] = useState("flex")
    const [hover, sethover] = useState("true")

    const [clickedCheck, setClickedCheck] = useState(false)
    const { doNate, setdoNate } = useContext(Context)
    useEffect(() => {
        async function upDateStatusOfDonation() {
            let requestOptions = {
                method: 'PATCH',
                redirect: 'follow'
            };
            await fetch(`http://localhost:3100/listings/donation/${props.DId}`, requestOptions)
            setdoNate(doNate + 1)
        }
        if (clickedCheck) {
            upDateStatusOfDonation()
            setTimeout(() => {
                setHeightOFdiv("none")
            }, 2000)
        }
    }, [clickedCheck])
    return (
        <ItemHolder data-status={hover} displayItem={displayItem} heightOFdiv={heightOFdiv}>
            <div>
                <p>{props.cName}</p>
                <CLocation>address: {props.cLocation}</CLocation>
                <p>{props.type}</p>
                <p>time of Donation {props.date}</p>
            </div>
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