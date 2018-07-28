import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TabLink } from 'ui';

const ContainerTabs = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TabsNavLink = ({ data, location }) => (
  <ContainerTabs>
    {
    data.map((element, index) => (
      <TabLink
        key={index}
        to={element.link}
        active={(location === element.link).toString()}
      >
        {element.label}
      </TabLink>
    ))
    }
  </ContainerTabs>
);

TabsNavLink.propTypes = {
  data: PropTypes.arrayOf(Object),
  location: PropTypes.string
};