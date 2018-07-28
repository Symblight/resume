import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Label, BlockWay } from 'ui';

const Wrapper = styled(BlockWay)`
    margin-bottom: 12px;

    @media screen and (max-width: 768px) {

    }
`;

const SummaryWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    font-size: 16px;
`;

const Summary = ({ title, summary }) => (
  <SummaryWrap>
    <Label>
      {title}
    </Label>
    <Content>
      {summary}
    </Content>
  </SummaryWrap>
);

export const ArticleInfo = ({
  date, title, summary
}) => (
  <Wrapper title={date}>
    <Summary title={title} summary={summary} />
  </Wrapper>
);

ArticleInfo.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
};

Summary.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string
};