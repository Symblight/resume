import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = styled.article`
    width: 100%;
    padding-top: 1rem;
`

class TabConatiner extends PureComponent {
    static propTypes = {
      children: PropTypes.any,
      selected: PropTypes.number,
    }

    constructor(props) {
      super(props)

      this.state = {
        selected: props.selected || 0,
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        selected: nextProps.selected,
      })
    }

    render() {
      const { children } = this.props
      const { selected } = this.state

      return (
        <Wrapper>
          { children ? children[selected] : null }
        </Wrapper>
      )
    }
}

export default TabConatiner
