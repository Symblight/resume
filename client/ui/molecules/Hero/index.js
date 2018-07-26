import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Ava from 'assets/ava.jpg';
import { Avatar } from 'ui';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Description = styled.div`
    display: flex;
    font-weight: 700;
    margin: 12px;
    word-wrap: break-word;
    width: 240px;
    align-items: center;
    color: #fff;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: -.003em;

    @media screen and (min-width: 768px) {
        font-size: 21px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Hero = ({
  children, className
}) => (
  <Wrapper className={className}>
    <Avatar url={Ava} />
    <Description>
      {children}
    </Description>
  </Wrapper>
);

Hero.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};