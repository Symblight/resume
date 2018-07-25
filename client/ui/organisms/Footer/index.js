import React from 'react';
import styled from 'styled-components';
import { size, palette } from 'styled-theme';

import { Icon } from 'ui';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: ${size('maxWidth')};
    padding-top: 30px;
    padding-bottom: 30px;
    font-weight: 700;
`;

const UlWrap = styled.ul`
    display: flex;
    text-decoration: none;
    font-size: 16px;
    list-style: none;
    justify-content: space-between;
    margin: 12px;
    padding: 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        
    }

    li {
        padding: 2px;
    }
`;

const LinkFooter = styled.a`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid  ${palette('primary', 1, true)};
    }
`;

export const Footer = (props) => (
  <Wrapper>
    <UlWrap>
      <li>
        <LinkFooter>made by Alexey Tkachenko 2018</LinkFooter>
      </li>
      <li>
        <LinkFooter href="https://github.com/symblight">github</LinkFooter>
      </li>
      <li>version 1.0.0</li>
    </UlWrap>
  </Wrapper>
);