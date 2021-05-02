import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 16px;
    text-align: left;
`;

function Header() {
  return (
    <HeaderWrapper>
      Header goes here
    </HeaderWrapper>
  );
}

export default Header;
