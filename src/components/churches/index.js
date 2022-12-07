import ListChurches from "./Chruch_listing";
import styled from "@emotion/styled";
import NavCircle from "../navbar";
import { useContext } from "react";
import Context from "../../context/Context";

const ChurchesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`;

export default function Church() {
    const { churchData, isUserLogedIn } = useContext(Context)


    // let cache = [
    //     {
    //         title : "Christian Cultural Center Brooklyn",
    //         churchImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Christian_Cultural_Center_Brooklyn_-_west_side.jpg",
    //         address :"12020 Flatlands Ave, Brooklyn, NY 11207",
    //         status : "Resolved",
    //         linkID : 1 
    //     },
    //     {
    //         title : "Park Slope Community Church",
    //         churchImg: "https://lh5.googleusercontent.com/p/AF1QipMLJNFl5GiFZv4ek8Ph0D9BKhnL-pHnzMPEk3ha=w1800-h1689-p-k-no",
    //         address :"251 12th St, Brooklyn, NY 11215",
    //         status : "Open",
    //         linkID : 2 
    //     },
    //     {
    //         title : "Manor Community Church",
    //         churchImg: "https://lh3.googleusercontent.com/p/AF1QipPC56AR_rHHl5gDdVbQm9m2YveaFNqXsHUwso4D=s1360-w1360-h1020",
    //         address :"350 W 26th St, New York, NY 10001",
    //         status : "Pending",
    //         linkID : 3
    //     }
    // ]
    const listOfChurches = churchData.map((churches, i) => {
        return <ListChurches
            key={`Churchkey${i}`}
            title={churches.church_name}
            churchImg={churches.img}
            address={churches.location}
            status={churches.status}
            linkID={churches.id}
            phone_number={churches.phone_number}
        />
    });


    return (
        <div>
            <NavCircle
                style={{ position: "absolute", top: "10px" }}
                routerLinks={isUserLogedIn ? [{ link: '../', name: "home" }, { link: '../church', name: "church" }, { link: '../about', name: "about" }] : [{ link: '../', name: "home" }, { link: '../church', name: "church" }, { link: '../about', name: "about" }, { link: '../login', name: "login" }, { link: '../signup', name: "signup" }]}
            />
            <ChurchesDiv>
                {listOfChurches}
            </ChurchesDiv>
        </div>
    )
}