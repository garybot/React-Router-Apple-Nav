import React from "react";
import styled from "styled-components";

import ItemLink from "./ItemLink.js";

const Div = styled.ul`
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
    <Div>
      {
        sectionData.map(item => <ItemLink item={item} />)
      }
    </Div>
  );
}

export default SubNav;