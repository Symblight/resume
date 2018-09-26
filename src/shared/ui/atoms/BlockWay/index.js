import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palette } from 'styled-theme'


const Wrapper = styled.article`
    display: flex;
    flex-direction: row;
    background-color: ${palette('white', 1, true)};
`

const Title = styled.div`
    background-color: ${palette('primary', 1, true)};
    color: ${palette('white', 3, true)};
    padding: 1rem;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.58;
`

const Content = styled.div`
    padding: 1rem;
    width: 100%;
`

export const BlockWay = ({
  title, children, className,
}, props) => (
  <Wrapper className={className}>
    <Title>
      {title}
    </Title>
    <Content>
      {children}
    </Content>
  </Wrapper>
)

BlockWay.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.string,
}
