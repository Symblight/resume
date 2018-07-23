import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
    border-bottom: solid 1px #e4e4eb;
    margin-bottom: 44px;
    padding-right: 6px;
    padding-left: 6px;

    @media screen and (max-width: 768px) {

    }
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: 700;
`;

const WrapTitle = styled.div`
    padding-bottom: 12px;
`;

export const Section = ({
    children, title
}) => {
    return (
        <Wrapper>
            {title ? <WrapTitle><Title>{title}</Title></WrapTitle> : null }
            <div>
            {children}
            </div>
        </Wrapper>
    );
};

Section.propTypes = {
    children: PropTypes.any
}