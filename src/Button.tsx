import * as React from "react";
import { styled } from "./stitches.config";

const StyledButton = styled("button", {
  // reset
  outline: "none",
  m: 0,
  p: 0,
  boxSizing: "border-box",
  verticalAlign: "baseline",
  textDecoration: "none",
  WebkitTapHighlightColor: "transparent",
  fontSize: "16px",

  appearance: "none",
  border: "none",
  bgColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
  cursor: "pointer",
  userSelect: "none",
  bg: "none",
  br: "5px",
  transitionDuration: "0.15s",
  transitionProperty: "border-color, background, color, transform, box-shadow",
  transitionTimingFunction: "ease",
  textRendering: "auto",

  px: "12px",

  lineHeight: 1,

  variants: {
    size: {
      small: { h: "32px", fontSize: "14px" },
      medium: { h: "40px" },
      large: { h: "48px" }
    },
    shape: {
      square: { size: "46px" },
      cirlce: { br: "100%", size: "46px" }
    },
    type: {
      default: {
        bgColor: "black",
        color: "white",
        "&:hover": {
          color: "black",
          bgColor: "transparent",
          boxShadow: "0 0 0 1px black"
        },
        "&:active": {
          bgColor: "#eaeaea"
        }
      },
      secondary: {
        $$shadowColor: "#eaeaea",
        bgColor: "transparent",
        color: "#666",
        boxShadow: "0 0 0 1px $$shadowColor",
        "&:hover": {
          bgColor: "white",
          color: "black",
          boxShadow: "0 0 0 1px black"
        },
        "&:active": {
          bgColor: "#eaeaea",
          color: "black",
          boxShadow: "0 0 0 1px black"
        }
      },
      success: {
        bgColor: "#0070f3",
        boxShadow: "0 0 0 1px #0070f3",
        color: "white",
        "&:hover": {
          bgColor: "transparent",
          color: "#0070f3"
        },
        "&:active": {
          bgColor: "#eaeaea"
        }
      },
      error: {
        bgColor: "#ee0000",
        boxShadow: "0 0 0 1px #ee0000",
        color: "white",
        "&:hover": {
          bgColor: "transparent",
          color: "#ee0000"
        },
        "&:active": {
          bgColor: "#eaeaea"
        }
      },
      warning: {
        bgColor: "#f5a623",
        boxShadow: "0 0 0 1px #f5a623",
        color: "white",
        "&:hover": {
          bgColor: "transparent",
          color: "#f5a623"
        },
        "&:active": {
          bgColor: "#eaeaea"
        }
      },
      alert: {}
    },
    variant: {
      shadow: {
        boxShadow: "$small"
      },
      ghost: {}
    },
    loading: {
      true: {}
    },
    disabled: {
      true: {
        pointerEvents: "none",
        bgColor: "#fafafa",
        color: "#999",
        boxShadow: "0 0 0 1px #eaeaea"
      }
    }
  },
  compoundVariants: [
    { size: "small", shape: "cirlce", css: { size: "32px", p: 0 } },
    { size: "medium", shape: "cirlce", css: { size: "40px" } },
    { size: "large", shape: "cirlce", css: { size: "408px" } },
    { size: "small", shape: "square", css: { size: "32px", p: 0 } },
    { size: "medium", shape: "square", css: { size: "40px" } },
    { size: "large", shape: "square", css: { size: "48px" } }
  ],
  defaultVariants: {
    size: "medium",
    type: "default"
  }
});

export const Button = React.forwardRef(({ ...props }, forwardedRef) => (
  <StyledButton {...props} ref={forwardedRef} />
));
