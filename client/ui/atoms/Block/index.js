import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';

const Wrapper = styled.div`
    width:100%;
    cursor: pointer;
    transition: background-color .3s, color .3s;
    background-color: ${palette('white', 2, true)};
    border-color: ${palette('white', 2, true)};

    &:hover{
        background-color: ${palette('primary', 0, true)};
    }
`;

export const Block = ({
  children, ...props
}) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);

Block.propTypes = {
  children: PropTypes.any
};