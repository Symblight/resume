import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Hero, TabsNavLink } from 'ui';
import { changeSelectedPage } from './actions';
import withHero from '../../props-proxy/withHero';

const Links = [
  {
    link: '/',
    label: 'About'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  }
];

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

const LinkWrap = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    padding: 1rem;

    &:hover {
        border-bottom: 1px solid red;
    }

    &:active {
      border-bottom: 1px solid green;
    }
`;

@withHero
class Header extends PureComponent {

  static propTypes = {
    onSelect: PropTypes.func,
    data: PropTypes.any,
    tabs: PropTypes.arrayOf(Object)
  }

    handleSelectedPage = (index) => {
      const { onSelect } = this.props;

      onSelect(index);
    }

    render() {
      const { data, tabs, location } = this.props;

      return (
        <Wrapper>
          <Hero>{data}</Hero>
          <TabsNavLink data={Links} location={location.pathname} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
