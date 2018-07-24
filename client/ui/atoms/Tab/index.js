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
        border-bottom-color: ${(props) => props.active ?  palette(props.palette, 1, true)  : ``};
        border-bottom-width: ${(props) => props.active ? '2.5px': '0px'};
        
        &:hover {
            border-bottom: 2.5px solid ${props => palette(props.palette, 1, true)};
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
    font-weight: 700;

    @media screen and (min-width: 768px) {
        color: ${(props) => props.active ?  palette(props.palette, 1, true) : palette(props.palette, 0, true) };

        &:hover {
            color: ${props => palette(props.palette, 1, true)};
        }
    }

    @media screen and (max-width: 768px) {
        background-color: ${(props) => props.active ?  palette('primary', 2, true) : null};

        color: ${(props) => props.active ?  palette('dark', 1, true) : palette('white', 3, true) };
    }
`;

export class Tab extends PureComponent {

    render() {
        const { onClick, active, label, palette } = this.props;

        return (
            <Wrapper onClick={onClick}{...this.props}>
                <Label 
                active={active}
                palette={palette}
                >{label}</Label>
            </Wrapper>
            )
    }
}

Tab.propTypes = {
    label: PropTypes.string,
    palette: PropTypes.string
};

Tab.defaultProps = {
    palette: 'dark'
}