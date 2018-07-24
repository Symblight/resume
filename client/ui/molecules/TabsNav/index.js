import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import _ from 'lodash';

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
    }
`;

export class TabsNav extends PureComponent {
    state = {
        selected: 0
    }
    static propTypes = {

    }

    onClick = (event) => {
        const { onClick } = this.props;

        event.preventDefault();

        if (onClick) {
            onClick(event.currentTarget.id);
        }

        this.setState({selected: event.currentTarget.id});
    }

    render() {
        const { data, palette } = this.props;

        return (
            <Wrapper>
                 {
                        _.map(data, (item, id) =>
                            <Tab 
                                role="tab"
                                key={id}
                                aria-controls={`panel${id}`}
                                id={id}
                                onClick={this.onClick}
                                active={this.state.selected == id}
                                label={item.label}
                                palette={palette}
                                />
                        )
                    }
            </Wrapper>
        )
    }
}