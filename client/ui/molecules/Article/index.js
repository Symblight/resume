import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SVG from '../../../components/ImageSVG';

import { palette } from 'styled-theme';

import { Block, Label, Icon } from 'ui';

const Wrap = styled(Block)`
    display: flex;  
    padding: 10px;
    word-wrap: break-word;
    border-radius: 6px;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
 
    @media screen and (min-width: 768px) {
        width: 150px;
        height: 210px;
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

const IconWrap = styled.div`
    @media screen and (min-width: 768px) {
        margin: auto; 
    }

    @media screen and (max-width: 768px) {
        margin-right: 12px;
    }
`;

const SvgFigure = styled(Icon)`
    @media screen and (min-width: 768px) {
        width: 115px;
        height: 115px;
    }

    @media screen and (max-width: 768px) {
        width: 35px;
        height: 35px;
    }
`;

export const Article = ({
    title, children, img
}, props) => {
    return (
        <Wrap>
            <IconWrap>
                {
                    img ? <SvgFigure   icon={img} /> : null
                }
            </IconWrap>
            {children}
        </Wrap>
    );
}

Article.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};