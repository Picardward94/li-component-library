import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const StyledTypography = styled(Typography)(({ theme, variant }) => {
  const customStyles = theme.typography[variant] || {};
  return customStyles;
});

const LiTypography = ({ variant, ...props }) => {
  return <StyledTypography variant={variant} {...props} />;
};

export default LiTypography;