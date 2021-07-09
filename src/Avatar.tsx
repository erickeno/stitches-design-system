import * as React from "react";

import { styled } from "./stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  w: 48,
  h: 48,
  borderRadius: 24
});

const StyledImage = styled(AvatarPrimitive.Image, {
  w: "100%",
  h: "100%",
  objectFit: "cover"
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  w: "100%",
  h: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgColor: "dodgerblue",
  color: "white"
});

export const Avatar: React.FC<{ initials?: string; image?: string }> = ({
  initials = "UI",
  image
}) => (
  <StyledAvatar>
    <StyledImage src={image} />
    <StyledFallback>UI</StyledFallback>
  </StyledAvatar>
);
