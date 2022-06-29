// Elements:
// Box,Flex and Grid layout components using Styled System

// ___________________________________________________________________

import styled from "styled-components";

import {
  space,
  flex,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  color,
  width,
  overflow,
  textAlign,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  position,
  maxWidth,
  SpaceProps,
  ColorProps,
  WidthProps,
  FlexProps,
  AlignSelfProps,
  gridGap,
  FlexWrapProps,
  GridGapProps,
  GridTemplateColumnsProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  TextAlignProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  LetterSpacingProps,
  MaxWidthProps,
  DisplayProps,
  PositionProps,
  OverflowProps,
} from "styled-system";

type ElementProps = SpaceProps &
  WidthProps &
  ColorProps &
  FlexProps &
  AlignSelfProps &
  TextAlignProps &
  FontFamilyProps &
  FontSizeProps &
  MaxWidthProps &
  DisplayProps &
  PositionProps &
  FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps &
  FontWeightProps &
  LineHeightProps &
  GridTemplateColumnsProps &
  GridGapProps &
  LetterSpacingProps &
  OverflowProps;

export const Box = styled.div<ElementProps>`
  box-sizing: border-box;
  height: auto;
  transition:  all 0.222s ease-in-out;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`;

Box.displayName = "Box";

// Typography

export const Heading = styled.div<ElementProps>`
  box-sizing: border-box;
  display: block;
  transition:  all 0.222s ease-in-out;

  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${maxWidth}
  ${width}
`;

Box.displayName = "Heading";

export const Text = styled.div<ElementProps>`
  box-sizing: border-box;
  display: block;
  transition:  all 0.222s ease-in-out;

  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${maxWidth}
  ${width}
`;

Box.displayName = "Text";

// Flexbox

export const Flex = styled.div<ElementProps>`
  display: flex;
  box-sizing: border-box;
  height: auto;

  ${space}
  ${width}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`

Flex.displayName = 'Flex'