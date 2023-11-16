import React from "react";
import styled from "@emotion/styled";
import IconWrapper from "../tokens/icons/IconWrapper.js";

const Label = styled.div(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  lineHeight: "1em",
  fontSize: theme.typography.paragraph.fontSize,
  justifyContent: "center",
  border: "1px solid transparent",
  pointerEvents: "none",
  cursor: "default",
  "& .feather": {
    marginLeft: `${theme.spacing(1)}`,
  },
  "&.regular": {
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    height: `${theme.spacing(4.5)}`,
  },
  "&.small": {
    padding: `${theme.spacing(0.75)} ${theme.spacing(0.5)}`,
    height: `${theme.spacing(4)}`,
  },
  "&.extra-small": {
    padding: `${theme.spacing(0.5)} ${theme.spacing(0.25)}`,
    height: `${theme.spacing(3)}`,
  },
  "&.primary": {
    backgroundColor: theme.palette.colorTokens.surface["action-light"],
    color: theme.palette.colorTokens.text["body"],
  },
  "&.red": {
    backgroundColor: theme.palette.colorTokens.utility["error-light"],
    color: theme.palette.colorTokens.text["body"],
  },
  "&.green": {
    backgroundColor: theme.palette.colorTokens.utility["success-light"],
    color: theme.palette.colorTokens.text["body"],
  },
  "&.yellow": {
    backgroundColor: theme.palette.colorTokens.utility["warning-light"],
    color: theme.palette.colorTokens.text["body"],
  },
  "&.dark": {
    backgroundColor: theme.palette.colorTokens.surface["dark"],
    color: theme.palette.colorTokens.text["on-action"],
  },
  "&.disabled": {
    backgroundColor: theme.palette.colorTokens.surface["disabled"],
    color: theme.palette.colorTokens.text["disabled"],
  },
  "&.dark-secondary": {
    backgroundColor: theme.palette.colorTokens.surface.table["card-odd"],
    color: theme.palette.colorTokens.text["body"],
    borderColor: theme.palette.colorTokens.border["dark"],
  },
  "&.highlight-yellow": {
    backgroundColor: theme.palette.colorTokens.text.highlight,
    color: theme.palette.colorTokens.text.body,
    cursor: "text"
  },
  "&.is-interactive": {
    "&:not(.disabled):not(.highlight-yellow)": {
      cursor: "pointer",
      pointerEvents: "all",
      "&.primary:hover": {
        borderColor: theme.palette.colorTokens.border["action"],
      },
      "&.red:hover": {
        borderColor: theme.palette.colorTokens.utility["error-main"],
      },
      "&.green:hover": {
        borderColor: theme.palette.colorTokens.utility["success-main"],
      },
      "&.yellow:hover": {
        borderColor: theme.palette.colorTokens.utility["warning-main"],
      },
      "&.dark:hover": {
        borderColor: theme.palette.colorTokens.border["action"],
      },
      "&.dark-secondary:hover": {
        borderColor: theme.palette.colorTokens.border["action"],
      },
    },
  },
}));

const CustomLabel = ({
  type = "primary",
  size = "regular",
  icon,
  children,
  isInteractive = false,
  ...props
}) => {
  const classes = [size, type, isInteractive ? "is-interactive" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Label className={classes} {...props}>
      {children}
      {icon && <IconWrapper iconName={icon} />}
    </Label>
  );
};

export default CustomLabel;
