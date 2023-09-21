import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import IconWrapper from "../tokens/icons/IconWrapper";

const StyledButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    textTransform: "none",

    "&.primary": {
      backgroundColor: theme.palette.colorTokens.surface["action-primary"],
      color: theme.palette.colorTokens.text["on-action"],
      "&:hover": {
        backgroundColor: theme.palette.colorTokens.surface["action-hover"],
      },
    },
    "&.secondary": {
      backgroundColor: theme.palette.colorTokens.surface.table["card-odd"],
      color: theme.palette.colorTokens.text.action,
      border: `1px solid ${theme.palette.colorTokens.text.action}`,
      "&:hover": {
        backgroundColor: theme.palette.colorTokens.surface["action-primary"],
        color: theme.palette.colorTokens.text["on-action"],
      },
    },
    "&.danger": {
      backgroundColor: theme.palette.colorTokens.utility["error-main"],
      color: theme.palette.colorTokens.text["on-action"],
      "&:hover": {
        backgroundColor: theme.palette.colorTokens.utility["error-dark"],
      },
    },
    "&.disabled, &.loading": {
      backgroundColor: theme.palette.colorTokens.surface["disabled"],
      pointerEvents: "none",
      color: theme.palette.colorTokens.text["disabled"],
    },
    "&.regular": {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      fontSize: theme.typography["paragraph"].fontSize,
      height: `${theme.spacing(5)}`,
      minWidth: `${theme.spacing(5)}`,
    },
    "&.small": {
      padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
      fontSize: theme.typography["paragraph"].fontSize,
      height: `34px`,
      minWidth: `34px`,
    },
    "&.text": {
      background: "none",
      border: "0",
      fontSize: "inherit",
      height: "inherit",
      padding: "0",
      textDecoration: "none",
      "&.primary, &.secondary": {
        color: theme.palette.colorTokens.text["action"],
        "&:hover": {
          color: theme.palette.colorTokens.text["action-hover"],
          background: "none",
          textDecoration: "underline",
        },
      },
    },
    "&.left-icon svg": {
      paddingRight: theme.spacing(1),
    },
    "&.right-icon svg": {
      paddingLeft: theme.spacing(1),
    },
    "&.left-icon.right-icon svg:first-of-type": {
      paddingLeft: theme.spacing(0),
    },
    "&.left-icon.right-icon svg:last-of-type, &.loading.left-icon svg": {
      paddingRight: theme.spacing(0),
    }
  },
}));

const CustomButton = ({
  type = "primary",
  size = "regular",
  showText = true,
  textValue,
  leftIcon,
  rightIcon,
  ...props
}) => {
  if (type === "loading") {
    leftIcon = "LoadingIcon";
    rightIcon = null;
    showText = false;
  }

  const hasText = showText && Boolean(textValue);

  // Construct the classes string
  const classes = [
    'MuiButton-root',
    type,
    size,
    leftIcon ? 'left-icon' : '',
    rightIcon ? 'right-icon' : ''
  ].filter(Boolean).join(' ');

  const iconPadding = hasText ? "16px" : "0";

  if (size === "text") {
    return (
      <StyledButton

        href="#"
        className={classes}
        disableRipple
        {...props}
      >
        {textValue}
      </StyledButton>
    );
  }

  return (
    <StyledButton className={classes} disableRipple {...props}>
      {leftIcon && (
        <IconWrapper
          iconName={leftIcon}
          size="medium"
          paddingRight={iconPadding}
          paddingLeft="0"
        />
      )}
      {hasText && textValue}
      {rightIcon && (
        <IconWrapper
          iconName={rightIcon}
          size="medium"
          paddingLeft={iconPadding}
          paddingRight="0"
        />
      )}
    </StyledButton>
  );
};

export default CustomButton;