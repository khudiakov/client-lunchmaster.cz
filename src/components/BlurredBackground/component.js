import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, ImageContainer, ImageFilters, Image } from "./styles";

export const BlurredBackground = ({
  children,
  background,
  style,
  containerStyle
}) => (
  <StyledWrapper style={style}>
    <ImageContainer>
      <ImageFilters>
        <Image src={background} />
      </ImageFilters>
    </ImageContainer>
    <div style={containerStyle}>{children}</div>
  </StyledWrapper>
);

BlurredBackground.propTypes = {
  children: PropTypes.element.isRequired,
  background: PropTypes.string.isRequired,
  style: PropTypes.object,
  containerStyle: PropTypes.object
};

BlurredBackground.defaultProps = {
  style: {},
  containerStyle: {}
};
