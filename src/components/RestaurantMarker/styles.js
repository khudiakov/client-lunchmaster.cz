import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: ${({ highlighted }) => (highlighted ? "76px" : "55px")};
  height: ${({ highlighted }) => (highlighted ? "76px" : "55px")};
  transition: all 300ms ease;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
