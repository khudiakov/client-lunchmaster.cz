import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
`;

export const Header = styled.h4`
  margin: 0;
  color: ${props => (props.highlighted ? "#fffb3f" : "#ffcc34")};
  text-transform: uppercase;
  font-size: 1em;
  transition: color 0.4s;
`;

export const Food = styled.p`
  font-size: 0.8em;
  color: ${props => (props.highlighted ? "#fbffcc" : "#ccc")};
  display: flex;
  transition: color 0.4s;
  margin: 4px 0;
`;

export const FoodName = styled.span`
  flex: 1;
  color: inherit;
`;

export const FoodPrice = styled.span`
  width: 80px;
  text-align: right;
  color: inherit;
`;
