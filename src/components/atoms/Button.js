import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const StyledButton = styled(Button)(({ theme, type }) => ({
  "&.MuiButton-root": {
    textTransform: "none", // Add this line to override the uppercase styling
    "&.primary": {
      backgroundColor: theme.palette.colorTokens.surface["action-primary"], // Use surface-action-primary color token
      color: theme.palette.colorTokens.text["on-action"], // Use text-on-action color token
      "&:hover": {
        backgroundColor: theme.palette.colorTokens.surface["action-hover"], // Use surface-action-hover color token
      },
    },
    "&.secondary": {
      backgroundColor: theme.palette.colorTokens.surface.table["card-odd"], // Use table-card-odd-white color token
      color: theme.palette.colorTokens.text.action, // Use text-action color token
      border: `1px solid ${theme.palette.colorTokens.text.action}`, // Use text-action color for border
      "&:hover": {
        backgroundColor: theme.palette.colorTokens.surface["action-primary"], // Use surface-action-primary color token
        color: theme.palette.colorTokens.text["on-action"], // Use text-on-action color token
      },
    },
    "&.danger": {
      backgroundColor: theme.palette.colorTokens.utility["error-dark"], // Use error-dark color token
      "&:hover": {
        backgroundColor: theme.palette.colorTokens.utility["error-main"], // Use error-main color token
      },
    },
    "&.disabled": {
      backgroundColor: theme.palette.colorTokens.surface["disabled"], // Use surface-disabled color token
      pointerEvents: "none",
    },
    "&.loading": {
      backgroundColor: theme.palette.colorTokens.utility["information-main"], // Use information-main color token
      pointerEvents: "none",
    },
    "&.small": {
      padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
      fontSize: theme.typography["paragraph"].fontSize, // Use paragraph font size
    },
    "&.regular": {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      fontSize: theme.typography["paragraph"].fontSize, // Use paragraph font size
    },
    "&.text": {
      padding: 0,
      backgroundColor: "transparent",
    },
  },
}));

// Button Component
const CustomButton = ({
  type = "primary",
  size = "regular",
  showText = true,
  textValue,
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  if (size === "text") {
    return (
      <a href="#" className={`${type} ${size}`} {...props}>
        {showText && textValue}
      </a>
    );
  }

  return (
    <StyledButton className={`${type} ${size}`} disableRipple {...props}>
      {showLeftIcon && <IconButton>{leftIcon}</IconButton>}
      {showText && textValue}
      {showRightIcon && <IconButton>{rightIcon}</IconButton>}
    </StyledButton>
  );
};

export default CustomButton;
