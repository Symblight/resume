import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { size, palette } from 'styled-theme';
import { connect } from 'react-redux';

import Background from 'assets/background.jpg';

import { Hero, TabsNav } from 'ui';
import { changeSelectedPage } from './actions';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 40vh;
    padding-top: 1rem;
    justify-content: center;

    @media screen and (min-width: 768px) {
       // background: url(${Background}) no-repeat center bottom fixed;
        background-size: cover;
    }


`;

const WrapTabs = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        background-color: ${palette('white', 3, true)};
    }

    @media screen and (max-width: 768px) {

    }
`;

class Header extends PureComponent {

    handleSelectedPage = (index) => {
        this.props.onSelect(index);
    }

    render() {
        return (
            <Wrapper>
                    <Hero />
                <WrapTabs><TabsNav onClick={this.handleSelectedPage} data={this.props.tabs}/></WrapTabs>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tabs: state.reducerPage.tabs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (index) => dispatch(changeSelectedPage(index))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
