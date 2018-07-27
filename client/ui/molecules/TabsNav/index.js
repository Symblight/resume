import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { palette } from 'styled-theme';

import { Tab } from 'ui';

const Wrapper = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column
        width: 100%;
        background-color: ${palette('primary', 1, true)};
    }
`;

export class TabsNav extends PureComponent {
    static propTypes = {
      selected: PropTypes.number,
      onClick: PropTypes.func,
      color: PropTypes.string,
      data: PropTypes.arrayOf(Object)
    }

    constructor(props) {
      super(props);

      this.state = {
        selected: props.selected || 0
      };
    }

    onClick = (event) => {
      const { onClick } = this.props;

      event.preventDefault();
      let index = _.toNumber(event.currentTarget.id);

      if (onClick) {
        onClick(index);
      }

      this.setState({ selected: index });
    }

    render() {
      const { data, color, routers } = this.props;
      const { selected } = this.state;

      return (
        <Wrapper>
          {
              _.map(data, (item, id) => (
                <Tab
                  role="tab"
                  key={id}
                  id={id}
                  onClick={this.onClick}
                  active={selected === id}
                  label={item.label}
                  color={color}
                  router={routers ? routers[id] : null}
                />
              ))
          }
        </Wrapper>
      );
    }
}