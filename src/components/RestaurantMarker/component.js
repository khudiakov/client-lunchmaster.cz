import React from "react";

import { Wrapper, ImageWrapper, Image } from "./styles";

import { RestaurantIcon } from "../../assets/images";

export const RestaurantMarker = ({
  highlighted,
  onMouseEnter,
  onMouseLeave
}) => (
  <Wrapper>
    <ImageWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Image src={RestaurantIcon} />
    </ImageWrapper>
  </Wrapper>
);
