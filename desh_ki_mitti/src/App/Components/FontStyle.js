import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #1e1d4c;
  margin-bottom: 0;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Heading4 = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #1e1d4c;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 768px) {
    justify-content:center;
    align-items:center;
    display:flex;
  }
`;

export const SubHead1 = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #1e1d4c;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SubHead3 = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  text-overflow: ellipsis;
  overflow: hidden; 
  width: 160px; 
  height: 1.2em; 
  white-space: nowrap;
  color: #1e1d4c;
  @media only screen and (min-width: 1195px) and (max-width:1230px) {
    width: 130px; 
  }
  @media only screen and (min-width: 1030px) and (max-width:1195px) {
    width: 110px; 
  }
`;

export const Caption1 = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #1e1d4c;
  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const SubText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #1e1d4c;
  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }
  color: #5e6282;
  text-overflow: ellipsis;
  overflow: hidden; 
  width: 100px; 
  height: 1.2em; 
  white-space: nowrap;
`;

export const Heading2 = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #1e1d4c;
  display: flex;
  color: #474747;
  align-items: center;
  justify-content: center;
    @media only screen and (max-width: 1056px) {
    font-size: 12px;
  }
`;
export const Heading3 = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #7d7d7d !important;
  @media only screen and (max-width: 1056) {
    font-size: 12px;
  }
`;
export const SubText1 = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  color: #5e6282;
`;