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
        border-bottom-color: ${(props) => props.active ?  palette('primary', 1, true)  : ``};
        border-bottom-width: ${(props) => props.active ? '2.5px': '0px'};
        
        &:hover {
            border-bottom: 2.5px solid ${palette('primary', 1, true)};
        }
    }

    @media screen and (max-width: 768px) {
        background-color: ${(props) => props.active ?  palette('primary', 1, true) : null};

        &:hover {
            background-color: ${palette('primary', 1, true)};
        }
    }
`;

const Label = styled.span`
    display: block;
    font-size: 18px;
    padding: 1rem;

    @media screen and (min-width: 768px) {
        color: ${(props) => props.active ?  palette('dark', 1, true) : palette('dark', 0, true) };

        &:hover {
            color: ${palette('dark', 1, true)};
        }
    }

    @media screen and (max-width: 768px) {
        background-color: ${(props) => props.active ?  palette('primary', 1, true) : null};

        color: ${(props) => props.active ?  palette('dark', 1, true) : palette('white', 3, true) };
    }
`;

export class Tab extends PureComponent {

    render() {
        return (
            <Wrapper onClick={this.props.onClick}{...this.props}>
                <Label active={this.props.active}>{this.props.label}</Label>
            </Wrapper>
            )
    }
}

Tab.propTypes = {
    label: PropTypes.string
};