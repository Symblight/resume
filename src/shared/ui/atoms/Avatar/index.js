import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.img`
    border-radius: 5px;
    width: 150px;
    height: 150px;
    padding: 4px;
    background-color: white;

    @media screen and (max-width: 768px) {
      width: 180px;
      height: 180px;
  }
`

export const Avatar = ({ url }, props) => <Wrapper alt="Avatar" src={url} {...props} />

Avatar.propTypes = {
  url: PropTypes.string,
}
