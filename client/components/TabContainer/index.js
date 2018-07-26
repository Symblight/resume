import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.article`
    width: 100%;
    padding-top: 1rem;
    @media screen and (min-width: 768px) {
      //transform: translateX(100%);
   //   animation: ${({ left }) => (left ? 'moveFromRight .4s ease-in-out both' : 'moveFromLeft .4s ease-in-out both')};
    }

    // @keyframes moveFromRight {
    //   0% {
    //             transform: translateX(100%);
    // }
    //   100% {
    //             transform: translateX(0%);
    //   }
    // }

    // @keyframes moveFromLeft {
    //   0% {
    //             transform: translateX(-100%);
    // }
    //   100% {
    //             transform: translateX(0%);
    //   }
    // }
`;

class TabConatiner extends PureComponent {
    static propTypes = {
      children: PropTypes.any,
      selected: PropTypes.number
    }

    constructor(props) {
      super(props);

      this.state = {
        selected: props.selected || 0
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        selected: nextProps.selected
      });
    }

    render() {
      const { children } = this.props;
      const { selected } = this.state;

      return (
        <Wrapper left={selected === '1'}>
          { children ? children[selected] : null }
        </Wrapper>
      );
    }
}

export default TabConatiner;
