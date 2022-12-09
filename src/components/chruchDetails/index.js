import { useParams } from "react-router-dom";
import {useState , useEffect} from "react";
import {useContext} from "react";
import Context from "../../context/Context";
import Details from "./ChurchComp";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "@emotion/styled";


  const ChurchDetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

export default function ChurchDetails() {
  const { id } = useParams();
  const { churchData } = useContext(Context)
  
  const [currPage,setcurrPage] = useState("")
useEffect(()=>{
  const findId = (id) => {
    setcurrPage(churchData.find((val) => val.id === +id));
    console.log(currPage)
  };
  findId(id);

},[])

  return (
    <ChurchDetailsHolder>
      <Details 
      title={currPage.church_name}
      churchImg={currPage.img}
      location = {currPage.location}
      id ={currPage.id}
      />
       <Calendar />
    </ChurchDetailsHolder>
  );
}


