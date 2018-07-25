import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { font, palette } from 'styled-theme';

export const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-size: 18px;
  line-height: 2em;
`;

Label.propTypes = {
  children: PropTypes.any
};