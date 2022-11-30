import NavCircle from "../navbar";
import styled from "@emotion/styled";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
const GalleryDiv = styled.div`
    height:300px;
    background-color: red;
`;
export default function Landingpage(){
    return (
        <div>
            <MDBCarousel>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
      </MDBCarousel>
            <GalleryDiv>
                
            </GalleryDiv>
            <NavCircle />
            <h1>home page</h1>
        </div>
    )
}