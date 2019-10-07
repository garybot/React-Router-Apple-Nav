import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%
  height: 50px;
  background-color: #424242;
  margin: 0 auto;
`

function NavList(props) {
  return (
    <Nav className="main-nav">
      <a href="https://www.apple.com/us/" key="apple" className="nav-link" ><img src={props.navData.icon.apple.url} alt="Apple Logo" /> </a>
      {
        Object.keys(props.navData.section).map(key => {return (<Link to={`/${key}`} key={key} className="nav-link">{key}</Link>)})
      }
      <a href="https://www.apple.com/us/search" key="search" className="nav-link" ><img src={props.navData.icon.search.url} alt="Magnifying Glass icon" /> </a>
      <a href="https://www.apple.com/us/shop/goto/bag" key="shop" className="nav-link" ><img src={props.navData.icon.shop.url} alt="Shopping Bag Icon" /> </a>
    </Nav>
  );
}

export default NavList;