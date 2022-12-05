import NavCircle from "../navbar";
import styled from "@emotion/styled";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./landingpage.css";
import { useEffect, useContext } from "react";
import Context from "../../context/Context";

const GalleryDiv = styled.div`
  height: 300px;
  background-color: red;
`;
const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
`;
const InformationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
  border: 5px solid red;
`;
const Text = styled.p`
  width: 300px;
  padding: 20px;
  margin: 0;
  color: darkgreen;
`;
export default function Landingpage() {
  const { isUserLogedIn } = useContext(Context)
  return (
    <div>
      <MDBCarousel>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          height={500}
          src="https://gray-wdam-prod.cdn.arcpublishing.com/resizer/6PHBIGGn9iUqfMw6c5lAk33EZMg=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/FIVPU6JDKJGSVJSSW7AEIP3MEQ.png"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          height={500}
          src="https://images.squarespace-cdn.com/content/v1/5e39e98fcdcacd07d69d9e85/1586373544205-M62HQS4RNJI39TYYDWAY/Josepharvest.png"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          height={500}
          src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2015/06/promotakeout-packaging.jpg?itok=aiy93-Pl"
          alt="..."
        />
      </MDBCarousel>
      {/* <GalleryDiv></GalleryDiv> */}
      <NavCircle routerLinks={isUserLogedIn ? [{ name: "signOut" }, { link: 'church', name: "church" }] : [{ link: 'login', name: "login" }, { link: 'signup', name: "signup" }, { link: 'church', name: "church" }]} />
      <AboutUs>
        <InformationBox>
          <img
            width={343}
            height={201}
            src="https://www.stpaul.gov/sites/default/files/Media%20Root/Planning%20%26%20Economic%20Development/make-connections.png"
            alt="https://www.stpaul.gov/sites/default/files/Media%20Root/Planning%20%26%20Economic%20Development/make-connections.png"
          />
          <Text>What Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhatWhat Give-A-Way doesWhat Give-A-Way doesWhatWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way doesWhat Give-A-Way does</Text>
        </InformationBox>
        <InformationBox>
          <Text>Why we do this</Text>
          <img
            width={343}
            height={201}
            src="https://alearningbeeacademy.org/wp-content/uploads/2020/05/ALB-Pics18.jpg"
            alt="https://alearningbeeacademy.org/wp-content/uploads/2020/05/ALB-Pics18.jpg"
          />
          
        </InformationBox>
        <InformationBox>
          <img
            width={343} 
            height={201}
            src="http://files.cluster2.hgsitebuilder.com/hostgator49813/image/helpinghandslicensed2.jpg"
            alt="http://files.cluster2.hgsitebuilder.com/hostgator49813/image/helpinghandslicensed2.jpg"
          />
          
          <Text>Our dream</Text>
        </InformationBox>
      </AboutUs>
    </div>
    
  );
}
