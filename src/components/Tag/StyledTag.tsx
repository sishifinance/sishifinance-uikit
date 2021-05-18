import styled, { DefaultTheme } from "styled-components";
import { space, variant } from "styled-system";
import { Colors } from "../../theme/types";
import getColor from "../../util/getColor";
import { scaleVariants, styleVariants } from "./theme";
import { TagProps, variants } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}


const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  if (outline) {
    const themeColorKey = styleVariants[variantKey].backgroundColor as keyof Colors;
    const color = theme.colors[themeColorKey];

    return `
      color: ${color};
      background: transparent;
      border: 2px solid ${color};
    `;
  }

  return "";
};

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background-color: ${({ outline, theme, color, variant = "primary" }) =>
    outline ? "transparent" : (color ?? getColor(variant, theme))};
  border: 2px solid ${({ variant = "primary", theme, color }) => (color ?? getColor(variant, theme))};
  border-radius: 0px;
  color: #ffffff;
  display: inline-flex;
  font-size: 12px;
  font-weight: 400;
  height: 21px;
  line-height: 1.5;
  padding: 0px 3px;
  margin: 0px 2px;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}

  ${getOutlineStyles}
`;

export default null;
