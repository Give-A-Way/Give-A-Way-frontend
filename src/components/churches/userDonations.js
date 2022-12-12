import styled from "@emotion/styled"

const ItemHolder = styled.div`
    display: flex;
    border: 2px solid black;
    padding: 5px 5px;
    margin: 0 0 10px;
    border-radius: 20px;
    transition: 2s;
    background-color:gray;
    &:hover{
        transform: scale(1.2);
        background-color:white;
    }
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
    return (
        <ItemHolder>
            <div>
                <p>{props.cName}</p>
                <CLocation>address: {props.cLocation}</CLocation>
                <p>{props.type}</p>
                <p>time of Donation {props.date}</p>
            </div>
            <CheckboxHolder>
                    <Checkbox type="checkbox" />
            </CheckboxHolder>
        </ItemHolder>
    )
}