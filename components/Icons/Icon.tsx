// Icons Component:
// https://fontawesome.com/icons/

// ___________________________________________________________________

import React from "react";

import IconStyle from "./styles.scss";

// Icon
import NextArrow from "./SVG/NextArrow"

// ___________________________________________________________________

type Props = {
  className?: string;
  color?: string;
};

const Icon: React.FC<Props> = ({ className, color }) => {
  return (
    <IconStyle color={color} className={className}>
      <NextArrow />
    </IconStyle>
  );
};

export default Icon;

// ___________________________________________________________________
