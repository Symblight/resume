import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withSizes from 'react-sizes';
import { palette } from 'styled-theme';

import { Tab, Dropdown } from 'ui';

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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 770
});

@withSizes(mapSizesToProps)
export class TabsNav extends PureComponent {
    static propTypes = {
      selected: PropTypes.number,
      onClick: PropTypes.func,
      color: PropTypes.string,
      data: PropTypes.arrayOf(Object)
    }

    onClick = (index) => {
      const { onClick } = this.props;

      if (onClick) {
        onClick(index);
      }
    }

    render() {
      const {
        data, color, isMobile, selected
      } = this.props;

      if (isMobile) {
        return <Dropdown data={data} onClick={this.onClick} selected={selected} />;
      }

      return (
        <Wrapper>
          {
              _.map(data, (item, id) => (
                <Tab
                  key={id}
                  id={id}
                  onClick={this.onClick}
                  active={selected === id}
                  label={item.label}
                  color={color}
                />
              ))
          }
        </Wrapper>
      );
    }
}