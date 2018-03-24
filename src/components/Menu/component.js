import React from "react";

import { Container, Header, Food, FoodName, FoodPrice } from "./styles";

export const Menu = ({
  title,
  menu,
  style,
  highlighted,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <Container
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Header highlighted={highlighted}>{title}</Header>
      <div>
        {menu.map((food, idx) => (
          <Food key={idx} highlighted={highlighted}>
            <FoodName>{food.name}</FoodName>
            <FoodPrice>{Math.round(food.price) + " Kč "}</FoodPrice>
          </Food>
        ))}
      </div>
    </Container>
  );
};
