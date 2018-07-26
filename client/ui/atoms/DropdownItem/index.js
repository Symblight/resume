import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const Wrapper = styled.div`
    padding: 1rem;
    cursor: pointer;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: ${palette('white', 1, true)};
    font-size: 18px;
    font-weight: 700;

    &:hover {
      background-color: ${palette('white', 1, true)};
    }
`;

export class DropdownItem extends PureComponent {
    static propTypes = {
      onClick: PropTypes.func,
      index: PropTypes.string,
      className: PropTypes.string,
      children: PropTypes.any
    }

    onClick = (event) => {
      const { index, onClick } = this.props;

      if (onClick) {
        onClick(index);
      }
    }

    render() {
      const { children, className } = this.props;

      return (
        <Wrapper onClick={this.onClick} className={className}>
          {children}
        </Wrapper>
      );
    }
}
