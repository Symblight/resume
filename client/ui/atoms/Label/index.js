import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { font, palette } from 'styled-theme';

export const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('primary', 1)};
  font-size: 24px;
  line-height: 2em;
`;

Label.propTypes = {
  children: PropTypes.any
};