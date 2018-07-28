import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import { Hero, TabsNavLink } from 'ui';
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

const Content = styled.div`
    display: flex;
    flex: 1 auto;
    justify-content: center;
    align-items: center;
`;

@withHero
class Header extends PureComponent {

  static propTypes = {
    data: PropTypes.any
  }

  render() {
    const { data, location } = this.props;

    return (
      <Wrapper>
        <Content>
          <Hero title={data.name}>{data.summary}</Hero>
        </Content>
        <TabsNavLink data={Links} location={location.pathname} />
      </Wrapper>
    );
  }
}

export default withRouter(Header);
