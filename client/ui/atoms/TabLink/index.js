import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { palette } from 'styled-theme'


const Wrapper = styled(Link)`
    display: inline-block;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        transition: border-bottom .1s, color .1s;
        border-bottom-style: solid;
        border-bottom-color: ${({ active, color }) => (active === 'true' ? palette(color, 1, true) : 'none')};
        border-bottom-width: ${({ active }) => (active === 'true' ? '2.5px' : '0px')};
        
        &:hover {
            border-bottom: 2.5px solid ${({ color }) => palette(color, 1, true)};
        }
    }
    @media screen and (max-width: 768px) {
        background-color: ${({ active }) => (active === 'true' ? palette('primary', 1, true) : 'none')};
        &:hover {
            background-color: ${palette('primary', 1, true)};
        }
    }
`

const Label = styled.span`
    display: block;
    font-size: 18px;
    padding: 1rem;
    font-weight: 700;
    @media screen and (min-width: 768px) {
        color: ${({ active, color }) => (active === 'true' ? palette(color, 1, true) : palette(color, 0, true))};
        &:hover {
            color: ${({ color }) => palette(color, 1, true)};
        }
    }
    @media screen and (max-width: 768px) {
        background-color: ${({ active }) => (active === 'true' ? palette('primary', 2, true) : null)};
        color: ${({ active }) => (active === 'true' ? palette('dark', 1, true) : palette('white', 3, true))};
    }
`

export const TabLink = ({ to, active, children }) => (
  <Wrapper to={to} active={active} color="white">
    <Label
      active={active}
      color="white"
    >{children}
    </Label>
  </Wrapper>
)

TabLink.propTypes = {
  active: PropTypes.string,
  children: PropTypes.any,
  to: PropTypes.string,
}
