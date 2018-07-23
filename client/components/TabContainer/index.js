import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 100%;
    padding-top: 1rem;
`;

class TabConatiner extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            selected: this.props.selected || 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: nextProps.selected
        })
    }

    static propTypes = {
        children: PropTypes.any
    }

    render() {
        const { children } = this.props;

        return (
            <Wrapper>
                { children ?  children[this.state.selected] : null }
            </Wrapper>
        )
    }
}

export default TabConatiner;
