import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const ImageFilters = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  filter: blur(3px) brightness(60%) contrast(120%);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
`;
