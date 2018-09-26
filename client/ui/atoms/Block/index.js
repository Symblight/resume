import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = styled.div`
    cursor: pointer;
`

export const Block = ({
  children, ...props
}) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
)

Block.propTypes = {
  children: PropTypes.any,
}
