import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';

import { Block, Icon } from 'ui';

const Wrap = styled.a`
    display: flex;  
    padding: 10px;
    word-wrap: break-word;
    border-radius: 6px;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    transition: background-color .3s, color .3s;
    background-color: ${palette('white', 1, true)};
    border-color: ${palette('white', 1, true)};
    color: ${palette('primary', 1, true)};

    &:hover{
        background-color: ${palette('grayscale', 1, true)};
    }
 
    @media screen and (min-width: 768px) {
        width: 150px;
        height: 150px;
        margin: 12px
        flex-direction: column;  
    }

    @media screen and (max-width: 768px) {
        flex-direction: row;  
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #eee;
    }
`;

const IconWrap = styled.figure`
    @media screen and (min-width: 768px) {
        margin: auto; 
    }

    @media screen and (max-width: 768px) {
        margin-right: 12px;
    }
`;

const SvgFigure = styled(Icon)`
    @media screen and (min-width: 768px) {
        width: 85px;
        height: 85px;
    }

    @media screen and (max-width: 768px) {
        width: 35px;
        height: 35px;
    }
`;

export const Article = ({
  children, img, url
}, props) => (
  <Block href={url || '#'}>
    <Wrap>
      <IconWrap>
        {
         img ? <SvgFigure icon={img} /> : null
        }
      </IconWrap>
      {children}
    </Wrap>
  </Block>
);

Article.propTypes = {
  img: PropTypes.string,
  children: PropTypes.any,
  url: PropTypes.string
};