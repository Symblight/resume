import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  margin: auto;
  flex-direction: column;
  letter-spacing: 1px;
`;

export default class NotFoundPage extends Component {
  render() {
    const { location } = this.props;

    return (
      <Wrapper>
        <h2>Ooops..</h2>
        <h3>Not Found Page {location.pathname}</h3>
      </Wrapper>
    );
  }
}
