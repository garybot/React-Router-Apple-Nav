import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 50px;
`

function ItemLink(props) {
  return (
    <a href={props.item.url} className="sub-nav-link">
      <Img src={props.item.url} alt={props.item.name} />
      <p>{props.item.name}</p>
    </a>

  )
}

export default ItemLink