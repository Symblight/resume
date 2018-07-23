import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    padding: 1rem;
`;

export const BlockWay = ({
    children
}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

BlockWay.propTypes = {
    children: PropTypes.any
}