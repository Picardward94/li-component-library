import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme, customvariant }) => {
  const defaultStyles = theme.typography[customvariant] || {};
  return {
    ...defaultStyles,
    color: theme.typography.color,
    fontFamily: theme.typography.fontFamily, 
  };
});

const LiTypography = ({ variant, ...props }) => {
  const theme = useTheme();
  const customvariant = theme.typography[variant] ? variant : undefined;

  return <StyledTypography customvariant={customvariant} variant={customvariant ? undefined : variant} {...props} />;
};

export default LiTypography;