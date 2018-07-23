import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SVG from '../../../components/ImageSVG';

import { palette } from 'styled-theme';

import { Block, Label, Icon } from 'ui';

const Wrap = styled(Block)`
    display: flex;
    flex-direction: row;    
    padding: 10px;
    word-wrap: break-word;
    border-radius: 6px;
    align-items: center;
    font-weight: 700;
 
    @media screen and (min-width: 768px) {
        width: 240px;
        margin: 12px
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        border-bottom: 1px solid #eee;
    }
`;

const IconWrap = styled.div`
    margin-right: 6px;
`;

export const Article = ({
    title, children, img
}, props) => {
    return (
        <Wrap>
            <IconWrap>
                {
                    img ? <Icon  width="35" height="35" icon={img} /> : null
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