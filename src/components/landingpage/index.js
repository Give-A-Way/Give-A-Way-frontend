import NavCircle from "../navbar";
import styled from "@emotion/styled";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./landingpage.css";

const GalleryDiv = styled.div`
  height: 300px;
  background-color: red;
`;
export default function Landingpage() {
  return (
    <div>
      <MDBCarousel>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://gray-wdam-prod.cdn.arcpublishing.com/resizer/6PHBIGGn9iUqfMw6c5lAk33EZMg=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/FIVPU6JDKJGSVJSSW7AEIP3MEQ.png"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://images.squarespace-cdn.com/content/v1/5e39e98fcdcacd07d69d9e85/1586373544205-M62HQS4RNJI39TYYDWAY/Josepharvest.png"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2015/06/promotakeout-packaging.jpg?itok=aiy93-Pl"
          alt="..."
        />
      </MDBCarousel>
      <GalleryDiv></GalleryDiv>
      <NavCircle />
      <h1>home page</h1>
     

      <div id="Container">
        <div className="item1">
          <img
            width={343}
            height={201}
            src="https://www.stpaul.gov/sites/default/files/Media%20Root/Planning%20%26%20Economic%20Development/make-connections.png"
          ></img>
          <p>What Give-A-Way does</p>
        </div>
        <div className="item2">
          <img
            width={343}
            height={201}
            src="https://alearningbeeacademy.org/wp-content/uploads/2020/05/ALB-Pics18.jpg"
          ></img>
          <p>Why we do this</p>
        </div>
        <div className="item3">
          <img width={343} 
          src="http://files.cluster2.hgsitebuilder.com/hostgator49813/image/helpinghandslicensed2.jpg"></img>
          
          <p>Our dream</p>
        </div>
      </div>
    </div>
    
  );
}
