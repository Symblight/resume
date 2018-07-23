import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Label } from 'ui';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    margin-bottom: 12px;
    padding: 12px;

    @media screen and (max-width: 768px) {

    }
`;

const SummaryWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const DateWrap = styled.div`
    padding: 1rem;
`;

export const ArticleInfo = ({
    date, title, summary
}) => {
    return (
        <Wrapper>
            <DateWrap>{date}</DateWrap>
            <SummaryWrap>
                <Label>{title}</Label>
                <div>{summary}</div>
            </SummaryWrap>
        </Wrapper>
    );
};

ArticleInfo.propTypes = {
    children: PropTypes.any
};