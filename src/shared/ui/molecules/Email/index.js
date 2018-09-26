import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from 'styled-theme'


const Wrapper = styled.div`
    display: flex;
    background-color: ${palette('white', 1, true)};
    cursor: pointer;
    transition: .23s;
    padding: 2rem;
    font-size: 18px;

    &:hover {
        background-color: ${palette('white', 4, true)};
    }
`

const Content = styled.div`
    color: ${palette('primary', 1, true)};
    font-weight: 700;
`

const Header = styled.span`
    width: 100%;
`

export const Email = ({ data }) => (
  <Wrapper>
    <Header>Email:</Header>
    <Content>
      {data}
    </Content>
  </Wrapper>
)

Email.propTypes = {
  data: PropTypes.string,
}
