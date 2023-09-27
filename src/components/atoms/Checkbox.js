import React, { useState } from "react";
import styled from "@emotion/styled";
import LiTypography from "../tokens/LiTypography";
import IconWrapper from "../tokens/icons/IconWrapper";

const CheckboxContainer = styled.div(({ theme, disabled }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  ...(disabled && {
    pointerEvents: "none",
    cursor: "not-allowed",
    "& p": {
      color: theme.palette.colorTokens.text["disabled"],
      display: "inline",
    }
  }),
  "& .error-text": {
    color: theme.palette.colorTokens.utility["error-main"],
    display: "block",
    marginTop: theme.spacing(0.5),
  },
}));

const CheckboxLabelContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const StyledCheckbox = styled.div(({ theme, checked, error, disabled }) => ({
  border: "2px solid",
  borderColor: theme.palette.colorTokens.surface["action-primary"],
  borderRadius: theme.spacing(0.5),
  cursor: "pointer",
  color: theme.palette.colorTokens.text["on-action"],
  width: theme.spacing(3),
  height: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all ease-in-out 0.3s",
  marginRight: theme.spacing(1),
  ...(checked && {
    borderColor: theme.palette.colorTokens.surface["action-primary"],
    backgroundColor: theme.palette.colorTokens.surface["action-primary"],
  }),
  ...(error && {
    borderColor: theme.palette.colorTokens.utility["error-main"],
    ...(checked && {
      backgroundColor: theme.palette.colorTokens.utility["error-background"],
      color: theme.palette.colorTokens.utility["error-main"],
    }),
  }),
  ...(disabled && {
    borderColor: theme.palette.colorTokens.border["primary"],
    ...(checked && {
      backgroundColor: theme.palette.colorTokens.surface["disabled"],
      color: theme.palette.colorTokens.text["disabled"],
    }),
  }),
  "&:hover": {
    boxShadow: !disabled && `0 0 0 4px ${theme.palette.colorTokens.surface["action-light"]}`,
  },
}));

const CustomCheckbox = ({ label, error = false, errorText, disabled = false, checkState: initialCheckState = "unchecked", ...props }) => {
  const [checkState, setCheckState] = useState(initialCheckState);

  const handleCheckboxClick = () => {
    if (disabled) return;
    console.log("Current State:", checkState);

    if (checkState === "unchecked") {
      setCheckState("checked");
    } else {
      setCheckState("unchecked");
    }
  };
  
  const getIconName = () => {
    if (checkState === "checked") return "CheckIcon";
    if (checkState === "partial") return "MinusIcon";
    return null;
  };

  const iconName = getIconName();

  return (
    <CheckboxContainer onClick={handleCheckboxClick} disabled={disabled} {...props}>
      <CheckboxLabelContainer>
        <StyledCheckbox checked={checkState === "checked"} error={error} disabled={disabled}>
          {iconName && <IconWrapper iconName={iconName} size="medium" />}
        </StyledCheckbox>
        {label && <LiTypography variant="paragraph">{label}</LiTypography>}
      </CheckboxLabelContainer>
      {error && <LiTypography variant="paragraph-small" className="error-text">{errorText}</LiTypography>}
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
