import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { palette } from 'styled-theme';

import { DropdownItem, Icon } from 'ui';

const Wrapper = styled.div`
  background-color: ${palette('white', 3, true)};
`;

const Header = styled.div`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Title = styled.span`
  width: 100%;
`;

export class Dropdown extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(Object)
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: props.index || 0,
      show: false,
      items: props.data || []
    };
  }

  handleClick = () => {
    const { show } = this.state;

    this.setState({
      show: !show
    });
  }

  handleClickItem = (index) => {
    const { show } = this.state;

    this.setState({
      selected: index,
      show: !show
    });
  }

  renderList() {
    const { items, selected } = this.state;

    return (
      items.map((el, i) => (el.id !== selected
        ? (
          <DropdownItem
            key={el.id}
            index={el.id}
            onClick={this.handleClickItem}
          >
            {el.label}
          </DropdownItem>
        ) : null
      ))
    );
  }

  renderHeader() {
    const { show, selected, items } = this.state;

    return (
      <Header onClick={this.handleClick}>
        <Title>{items[selected].label}</Title>
        <Icon icon={!show ? 'arrowBottom' : 'arrowTop'} />
      </Header>
    );
  }

  render() {
    const { show } = this.state;

    return (
      <Wrapper>
        {this.renderHeader()}
        <div>
          {show ? this.renderList() : null}
        </div>
      </Wrapper>
    );
  }
}
