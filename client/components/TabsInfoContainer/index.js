import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import TabContainer from '../TabContainer';
import About from '../About';
import Contacts from '../Contacts';

const Slide = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 100;
    left: 0;
    transform: translateX(100%);
   // animation: moveFromRight ${({ animate }) => (animate ? '.8s' : '.0s')}  ease-in-out both;

    &:hover {
        animation: moveFromRight .8s ease-in-out both;
    }
        moveFromRight {
            0% {
                transform: translateX(100%);
            }
            50% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-100%);
            }
        }
`;

class InfoContainer extends PureComponent {
  render() {
    const { selectedIndex } = this.props;

    return (
      <Fragment>
        <Slide>11</Slide>
        <TabContainer selected={selectedIndex}>
          <About />
          <Contacts />
        </TabContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedIndex: state.reducerPage.selectedIndex
});

export default connect(mapStateToProps, null)(InfoContainer);