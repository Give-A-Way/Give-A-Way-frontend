import { useParams } from "react-router-dom";
import {useState , useEffect} from "react"

import Details from "./ChurchComp";


export default function ChurchDetails() {
  const { id } = useParams();

  const [currPage,setcurrPage] = useState("")

  let cache = [
    {
      title: "Christian Cultural Center Brooklyn",
      churchImg:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Christian_Cultural_Center_Brooklyn_-_west_side.jpg",
      address: "12020 Flatlands Ave, Brooklyn, NY 11207",
      status: "Resolved",
      linkID: 1,
    },
    {
      title: "Park Slope Community Church",
      churchImg:
        "https://lh5.googleusercontent.com/p/AF1QipMLJNFl5GiFZv4ek8Ph0D9BKhnL-pHnzMPEk3ha=w1800-h1689-p-k-no",
      address: "251 12th St, Brooklyn, NY 11215",
      status: "Open",
      linkID: 2,
    },
    {
      title: "Manor Community Church",
      churchImg:
        "https://lh3.googleusercontent.com/p/AF1QipPC56AR_rHHl5gDdVbQm9m2YveaFNqXsHUwso4D=s1360-w1360-h1020",
      address: "350 W 26th St, New York, NY 10001",
      status: "Pending",
      linkID: 3,
    },
  ];
useEffect(()=>{
  const findId = (id) => {
    setcurrPage(cache.find((val) => val.linkID === +id));
    console.log(currPage)
  };
  findId(id);

},[])

  return (
    <div>
      <Details 
      title={currPage.title}
      churchImg={currPage.churchImg}
      />
    </div>
  );
}

//   let cache = [
//     {
//         churchImg:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Christian_Cultural_Center_Brooklyn_-_west_side.jpg",
//         info: "Christian Cultural Center began as a small parish in the Williamsburg section of Brooklyn, New York in 1978. Our present Senior Pastor, Rev. A. R. Bernard, left a ten year banking career, to follow the call of God on his life to full time ministry to become the founding Pastor. With his wife Karen Bernard at his side the church began with a small membership, spreading the gospel of Jesus Christ and reaching out to its local community in Brooklyn.",
//         linkID: 1
//     }
//   ];

