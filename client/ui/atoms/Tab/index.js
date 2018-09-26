import React, { PureComponent } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from 'styled-theme'


const Wrapper = styled.li`
    display: inline-block;
    cursor: pointer;
    transition: border-bottom .1s, color .1s;
    border-bottom-style: solid;
    border-bottom-color: ${({ active, color }) => (active ? palette(color, 1, true) : '')};
    border-bottom-width: ${({ active, color }) => (active ? '2.5px' : '0px')};
    
    &:hover {
        border-bottom: 2.5px solid ${({ color }) => palette(color, 1, true)};
    }
`

const Label = styled.span`
    display: block;
    font-size: 18px;
    padding: 1rem;
    font-weight: 700;
    color: ${({ active, color }) => (active ? palette(color, 1, true) : palette(color, 0, true))};

    &:hover {
        color: ${({ color }) => palette(color, 1, true)};
    }
`

export class Tab extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    color: 'dark',
  }

  onClick = (event) => {
    const { onClick } = this.props

    event.preventDefault()

    const index = _.toNumber(event.currentTarget.id)

    if (onClick) {
      onClick(index)
    }
  }

  render() {
    const {
      className, active, label, color,
    } = this.props

    return (
      <Wrapper {...this.props} onClick={this.onClick} className={className} role="tab">
        <Label
          active={active}
          color={color}
        >
          {label}
        </Label>
      </Wrapper>
    )
  }
}
