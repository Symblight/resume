import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette, size } from 'styled-theme';
import { renderToStaticMarkup } from 'react-dom/server';

import SvgBackground from 'assets/images/coffee.svg';

const svgString = encodeURIComponent(renderToStaticMarkup(<SvgBackground />));

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${palette('primary', 1, true)};
    background-image: url("data:image/svg+xml, ${svgString}");

    a {
        color: ${palette('primary', 2, true)};
    }

    li {
        color: ${palette('primary', 2, true)};
    }
`;

const Container = styled.section`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    border-bottom: solid 1px #e4e4eb;
`;

const Content = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${palette('grayscale', 1, true)};
    flex-grow: 1;
    margin: auto;
    width: 100%;
`;

const Footer = styled.footer`
    background-color: ${palette('dark', 1, true)};
    color: ${palette('white', 2, true)};
`;

const Line = styled.span`
    height: 6px;
    background-image: -webkit-linear-gradient(left,#b973ff 0,#73d6ff 24%,#61dac8 50%,#73d6ff 77%,#b973ff 100%);
    background-image: linear-gradient(left,#b973ff 0,#73d6ff 24%,#61dac8 50%,#73d6ff 77%,#b973ff 100%);
    display: block;
`;

export const PageTemplate = ({
    header, footer, children,
}) => {
    return (
        <Wrapper>
            <Container>
                <Header>{header}</Header>
                <Content>{children}</Content>
            </Container> 
            <Footer>
                <Line />
                {footer}
            </Footer>
        </Wrapper>
    )
}

PageTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
    children: PropTypes.any,
  }