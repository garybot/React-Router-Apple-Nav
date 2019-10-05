import React from "react";
import { Route } from "react-router-dom";

import NavList from "./NavList.js";
import SubNav from "./SubNav.js";

import navData from "../macInfo.json";

function NavWrapper(props) {
  return (
    <>
      <Route path="/" render={(props) => <NavList {...props} navData={navData} />} />
      <Route path="/:section" render={(props) => <SubNav {...props} navData={navData} />} />
    </>
  );
}

export default NavWrapper