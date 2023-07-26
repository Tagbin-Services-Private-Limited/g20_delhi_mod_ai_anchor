import React from "react";
import styled from "styled-components";

const Bagde = (props) => {
  return (
    <>
      <Container>
        <CardDiv
          className="bg-white"
          style={{ backgroundImage: `url(${props.icon})` }}
        ></CardDiv>
        <TextDiv className="w-100 px-2">
          <BadgeCount className="text-center">
            {props.number || 0}
          </BadgeCount>
          <BadgeTitle className="text-center">
            {props.title || 0}
          </BadgeTitle>
        </TextDiv>
      </Container>
    </>
  )
}
export default Bagde;
const Container = styled.div`
  position: relative;
`;
const CardDiv = styled.div`
  border-radius: 0.75rem;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 100%;
`;

const TextDiv = styled.div`
`;
const BadgeCount = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  color: #1e1d4c !important;
  margin-bottom: 3px;
  @media (max-width: 850px) {
   font-size:17px
  }
`;
const BadgeTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: #767676 !important;
`;