// import { useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Context from "../../context/Context";

// export default function NavPanel() {

// //   const { isUserLogedIn, setIsUserLogedIn, setUserData } = useContext(Context);
//   const navigate = useNavigate();
//   const goToHomePage = (link) => {
//     navigate(link);
//   };
//   let navLinkist = [
//     { link: "../", name: "home" },
//     { link: "../church", name: "church" },
//     { link: "../about", name: "about" },
//   ].map((Nav, i) => {
//     return (
//       <ul>
//         <a
//           key={`navlink${i}`}
//           onClick={() => {
//             goToHomePage(Nav.link);
//           }}
//         >
//           {Nav.name}
//         </a>;
//       </ul>
      
//     );
//   });
//   const userSignOut = () => {
//     setIsUserLogedIn(false);
//     setUserData(null);
//   };
//   let ssignOutLogo = [
//     <a
      
//       onClick={() => {
//         goToHomePage("../login");
//       }}
//     ></a>,
//     <a
      
//       onClick={() => {
//         goToHomePage("../signup");
//       }}
//     ></a>,
//   ];

//   return (<div>
//     {navLinkist}
//         {isUserLogedIn ? (
//           <a
//             key="fa-sign-out"
//             className="fa fa-sign-out"
//             onClick={() => {
//               userSignOut();
//               goToHomePage("../");
//             }}
//           ></a>
//         ) : (
//           signOut
//         )}
    
//     </div>);
// }
