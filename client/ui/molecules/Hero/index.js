import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Ava from 'assets/ava.jpg'
import { Avatar } from 'ui'


const Wrapper = styled.div`
    display: flex;
    max-width: 420px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    word-wrap: break-word;
    width: 240px;
    color: #fff;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: -.003em;

    h2 {
        margin-top: auto;
    }

    @media screen and (min-width: 768px) {
        font-size: 21px;
        margin-left: 18px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 4px;
        justify-content: center;
        align-items: center;
    }
`

const Summary = styled.div`
    margin-top: auto;
    margin-bottom: auto;
`

export const Hero = ({
  children, className, title,
}) => (
  <Wrapper className={className}>
    <Avatar url={Ava} />
    <Description>
      <h2>{title}</h2>
      <Summary>{children}</Summary>
    </Description>
  </Wrapper>
)

Hero.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.string,
}
