import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, palette } from 'styled-theme';
import { connect } from 'react-redux';

import SvgBackground from 'assets/images/coffee.svg';

import { Hero, TabsNav } from 'ui';
import { changeSelectedPage } from './actions';
import withHero from '../../props-proxy/withHero';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    min-height: 50vh;
    justify-content: center;


    @media screen and (min-width: 768px) {
        background-size: cover;
    }
`;

const WrapTabs = styled.div`
    width: 100%;
    opacity: 0.25;
    height: 50px;
    z-index: 1;

    @media screen and (min-width: 768px) {
        background-color: ${palette('white', 3, true)};
    }

    @media screen and (max-width: 768px) {

    }
`;

const ContainerTabs = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 1rem;
`;

@withHero
class Header extends PureComponent {

    handleSelectedPage = (index) => {
      const { onSelect } = this.props;

      onSelect(index);
    }

    render() {
      const { data, tabs } = this.props;

      return (
        <Wrapper>
          <Hero>{data}</Hero>
          <ContainerTabs>
            <TabsNav onClick={this.handleSelectedPage} data={tabs} color="white" />
          </ContainerTabs>
        </Wrapper>
      );
    }
}

const mapStateToProps = (state) => ({
  tabs: state.reducerPage.tabs
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (index) => dispatch(changeSelectedPage(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
