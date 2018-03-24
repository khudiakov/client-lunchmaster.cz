import React from "react";

import { Wrapper, Image } from "./styles";

import { LogoIcon } from "../../assets/images";

export const Logo = ({ style }) => (
  <Wrapper style={style}>
    <Image src={LogoIcon} />
  </Wrapper>
);
