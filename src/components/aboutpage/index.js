import NavCircle from "../navbar";
import styled from "@emotion/styled";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useEffect, useContext } from "react";
import Context from "../../context/Context";

const AboutInfo = styled.h1`
    position: relative;
    left: 65px;
    top: 45px;
    color: rgb(199, 246, 161);
    font-family: ${`'Quicksand', sans-serif`};
    font-weight: 1000;
`

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
`;
const Text = styled.p`
  width: 300px;
  padding: 20px;
  margin: 0;
  color: rgb(199, 246, 161);
`;
export default function Aboutpage() {
  const { isUserLogedIn } = useContext(Context);
  return (
    <div>
      {/* src="https://gray-wdam-prod.cdn.arcpublishing.com/resizer/6PHBIGGn9iUqfMw6c5lAk33EZMg=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/FIVPU6JDKJGSVJSSW7AEIP3MEQ.png" */}
      {/* src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2015/06/promotakeout-packaging.jpg?itok=aiy93-Pl" */}
      {/* alt="..." */}
      {/* src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2015/06/promotakeout-packaging.jpg?itok=aiy93-Pl"
                    alt="..." */}

      <NavCircle
        routerLinks={
          isUserLogedIn
            ? [
              { link: "../", name: "home" },
              { link: "../church", name: "church" },
              { link: "../about", name: "about" },
            ]
            : [
              { link: "../", name: "home" },
              { link: "../church", name: "church" },
              { link: "../about", name: "about" },
              { link: "../login", name: "login" },
              { link: "../signup", name: "signup" },
            ]
        }
      />
      <AboutUs>
        <div>
          <AboutInfo>What we do</AboutInfo>
          <InformationBox>
            <img
              width={343}
              height={201}
              style={{borderRadius: "50%"}}
              src="https://www.stpaul.gov/sites/default/files/Media%20Root/Planning%20%26%20Economic%20Development/make-connections.png"
              alt="https://www.stpaul.gov/sites/default/files/Media%20Root/Planning%20%26%20Economic%20Development/make-connections.png"
            />
            <Text>
              Give-A-Way connects philanthropy and community activism by
              providing streamlined communication services for food distribution
              programs housed in religious institutions to decrease food
              insecurity within New York City’s underserved communities.
            </Text>
          </InformationBox>
        </div>
        <AboutInfo>why we do this </AboutInfo>
        <InformationBox>
          <Text>
            Rising prices on food and other necessities due to inflation have
            left underrepresented low-income people of color unable to buy food
            for their families. Supply chains for food distribution faced
            disruptions due to COVID-19 and increased consumer demand for food
            drastically.{" "}
          </Text>
          <img
            width={343}
            height={201}
            style={{ borderRadius: "50%" }}
            src="https://alearningbeeacademy.org/wp-content/uploads/2020/05/ALB-Pics18.jpg"
            alt="https://alearningbeeacademy.org/wp-content/uploads/2020/05/ALB-Pics18.jpg"
          />
        </InformationBox>
        <AboutInfo>Our Goal</AboutInfo>
        <InformationBox>
          <img
            width={343}
            height={201}
            style={{ borderRadius: "50%" }}
            src="http://files.cluster2.hgsitebuilder.com/hostgator49813/image/helpinghandslicensed2.jpg"
            alt="http://files.cluster2.hgsitebuilder.com/hostgator49813/image/helpinghandslicensed2.jpg"
          />

          <Text>
            We aim to serve places of worship with food distribution programs in
            New York City Communities. through our application by providing a
            platform for NYC businesses interested in food insecurity
            philanthropic initiatives.
          </Text>
        </InformationBox>
      </AboutUs>
    </div>
  );
}
