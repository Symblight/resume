import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { palette } from 'styled-theme';

const Wrapper = styled.li`
    display: inline-block;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        transition: border-bottom .1s, color .1s;
        border-bottom-style: solid;
        border-bottom-color: ${({ active, color }) => (active ? palette(color, 1, true) : '')};
        border-bottom-width: ${({ active, color }) => (active ? '2.5px' : '0px')};
        
        &:hover {
            border-bottom: 2.5px solid ${({ color }) => palette(color, 1, true)};
        }
    }

    @media screen and (max-width: 768px) {
        background-color: ${({ active }) => (active ? palette('primary', 1, true) : null)};

        &:hover {
            background-color: ${palette('primary', 1, true)};
        }
    }
`;

const Label = styled.span`
    display: block;
    font-size: 18px;
    padding: 1rem;
    font-weight: 700;

    @media screen and (min-width: 768px) {
        color: ${({ active, color }) => (active ? palette(color, 1, true) : palette(color, 0, true))};

        &:hover {
            color: ${({ color }) => palette(color, 1, true)};
        }
    }

    @media screen and (max-width: 768px) {
        background-color: ${({ active }) => (active ? palette('primary', 2, true) : null)};

        color: ${({ active }) => (active ? palette('dark', 1, true) : palette('white', 3, true))};
    }
`;

export class Tab extends PureComponent {
  render() {
    const {
      onClick, active, label, color, className
    } = this.props;

    return (
      <Wrapper onClick={onClick} className={className} {...this.props}>
        <Label
          active={active}
          color={color}
        >
          {label}
        </Label>
      </Wrapper>
    );
  }
}

Tab.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string
};

Tab.defaultProps = {
  color: 'dark'
};