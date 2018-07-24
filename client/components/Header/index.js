import React, { PureComponent } from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { size, palette } from 'styled-theme';
import { connect } from 'react-redux';

import SvgBackground from 'assets/images/coffee.svg';

import { Hero, TabsNav } from 'ui';
import { changeSelectedPage } from './actions';

const svgString = encodeURIComponent(renderToStaticMarkup(<SvgBackground />));

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    min-height: 50vh;
    justify-content: center;


    @media screen and (min-width: 768px) {
        background-size: cover;
    }
`;

const WrapTabs = styled.div`
    width: 100%;
    opacity: 0.25;
    height: 50px;
    z-index: 1;

    @media screen and (min-width: 768px) {
        background-color: ${palette('white', 3, true)};
    }

    @media screen and (max-width: 768px) {

    }
`;

const ContainerTabs = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 1rem;
`;

class Header extends PureComponent {

    handleSelectedPage = (index) => {
        this.props.onSelect(index);
    }

    render() {
        return (
            <Wrapper>
                    <Hero />
                    <ContainerTabs>
                         <TabsNav onClick={this.handleSelectedPage} data={this.props.tabs} palette='white'/> 
                        
                    </ContainerTabs>
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
