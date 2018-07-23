import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.article`
    display: flex;
    justify-content: center;
    border-top: 1px solid #e0e0e0;
`;

export const TabItem = ({
    children
}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

TabItem.propTypes = {
    children: PropTypes.any
}