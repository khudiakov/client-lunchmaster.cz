import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const MapContainer = styled.div`
  flex: 3;
`;

export const MenusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
