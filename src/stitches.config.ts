import { createCss } from "@stitches/react";
import { tomato, purple, gray, mauve } from "@radix-ui/colors";

export const { styled, theme, global } = createCss({
  theme: {
    colors: {
      ...tomato,
      ...purple,
      ...gray,
      ...mauve,
      gray400: "gainsboro",
      gray500: "lightgray",
      purple400: "blueviolet",
      purple500: "darkviolet",
      red400: "tomato",
      red500: "#cc0000",

      primary: "$purple400",
      primaryDark: "$purple500",

      forground: "black"
    },

    space: {
      1: "5px",
      2: "10px",
      3: "15px"
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px"
    },
    fonts: {
      inter:
        'Inter, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      smallest: "0px 4px 8px rgba(0,0,0,0.12)",
      small: "0 5px 10px rgba(0,0,0,0.12)",
      medium: "0 8px 30px rgba(0,0,0,0.12)",
      large: "0 30px 60px rgba(0,0,0,0.12)"
    },
    zIndices: {},
    transitions: {}
  },
  utils: {
    // width & height
    size: (config) => (value) => ({
      width: value,
      height: value
    }),
    w: (config) => (value) => ({
      width: value
    }),
    minW: (config) => (value) => ({
      minWidth: value
    }),
    maxW: (config) => (value) => ({
      maxWidth: value
    }),
    h: (config) => (value) => ({
      height: value
    }),
    minH: (config) => (value) => ({
      minHeight: value
    }),
    maxH: (config) => (value) => ({
      maxHeight: value
    }),

    // padding
    p: (config) => (value) => ({
      padding: value
    }),
    pt: (config) => (value) => ({
      paddingTop: value
    }),
    pr: (config) => (value) => ({
      paddingRight: value
    }),
    pb: (config) => (value) => ({
      paddingBottom: value
    }),
    pl: (config) => (value) => ({
      paddingLeft: value
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    // margin
    m: (config) => (value) => ({
      margin: value
    }),
    mt: (config) => (value) => ({
      marginTop: value
    }),
    mr: (config) => (value) => ({
      marginRight: value
    }),
    mb: (config) => (value) => ({
      marginBottom: value
    }),
    ml: (config) => (value) => ({
      marginLeft: value
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value
    }),

    bgColor: (config) => (value) => ({
      backgroundColor: value
    }),
    bg: (config) => (value) => ({
      background: value
    }),

    // border
    br: (config) => (value) => ({
      borderRadius: value
    }),
    borderX: (config) => (value) => ({
      borderLeft: value,
      borderRight: value
    }),
    borderY: (config) => (value) => ({
      borderTop: value,
      borderBottom: value
    }),

    linearGradient: (config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`
    })
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)"
  }
});
