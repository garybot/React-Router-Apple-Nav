import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 50px;
`

function ItemLink(props) {
  const item = props.item
  return (
    <a href={item.url} className="sub-nav-link">
      <Img src={item.url} alt={item.name} />
      <p>{item.name}</p>
    </a>

  )
}

export default ItemLink