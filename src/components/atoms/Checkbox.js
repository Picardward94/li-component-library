import React, { useState } from 'react';
import styled from '@emotion/styled';
import LiTypography from '../tokens/LiTypography';
import IconWrapper from '../tokens/icons/IconWrapper';

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckbox = styled.div(({ theme, checked, errorState }) => ({
  border: '2px solid',
  borderColor: errorState ? theme.palette.colorTokens.utility["error-main"] : theme.palette.colorTokens.surface["action-primary"],
  borderRadius: theme.spacing(0.5),
  color: theme.palette.colorTokens.text["on-action"],
  width: theme.spacing(3),  // match with your icon size
  height: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all ease-in-out 0.3s',
  marginRight: theme.spacing(1),
  
  ...(checked && {

    borderColor: theme.palette.colorTokens.surface["action-primary"],
    backgroundColor: theme.palette.colorTokens.surface["action-primary"],
  }),

  '&:hover': {
    boxShadow: `0 0 0 4px ${theme.palette.colorTokens.surface["action-light"]}`
  },
}));

const CustomCheckbox = ({ label, errorState = false, errorText, ...props }) => {
    // States: 'unchecked', 'checked', 'partial'
    const [checkState, setCheckState] = useState('unchecked');
  
    const handleCheckboxClick = () => {
        console.log('Current State:', checkState); 
        
        if (checkState === 'unchecked') {
          setCheckState('checked');
        } else {
          setCheckState('unchecked');
        }
      };
  
    const getIconName = () => {
      if (checkState === 'checked') return "CheckIcon";
      if (checkState === 'partial') return "MinusIcon";
      return null;  // No icon for unchecked state
    };
  
    const iconName = getIconName();
  
    return (
      <CheckboxContainer onClick={handleCheckboxClick} {...props}>
        <StyledCheckbox checked={checkState === 'checked'} errorState={errorState}>
          {iconName && <IconWrapper iconName={iconName} size="medium" />}
        </StyledCheckbox>
        {label && <LiTypography variant="paragraph">{label}</LiTypography>}
        {errorState && (
          <LiTypography variant="paragraph-small" className="error-text">
            {errorText}
          </LiTypography>
        )}
      </CheckboxContainer>
    );
  };

export default CustomCheckbox;