import React from "react";
import styled from "styled-components";

import ItemLink from "./ItemLink.js";


const Ul = styled.ul`
  margin: 0 auto;
  padding-top: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: grey;
`

function SubNav(props) {
  const sectionData = props.navData.section[props.match.params.section];
  return (
    <Ul>
      {
        sectionData.map(item => <ItemLink item={item} />)
      }
    </Ul>
  );
}

export default SubNav;