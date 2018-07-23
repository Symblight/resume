import React from 'react';
import styled from 'styled-components';

import Ava from 'assets/ava.jpg';
import { Avatar } from 'ui';

const Wrapper  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Description = styled.div`
    display: flex;
    font-weight: 700;
    margin: 12px;
    word-wrap: break-word;
    width: 240px;
    align-items: center;
    font-size: 16px;
    color: #fff;
`;

export const Hero = (props) => {
    return (
        <Wrapper className={props.className}>
            <Avatar url={Ava}/>
            <Description>Hey! My name is Alexey and I'm web developer. My stack: React, NodeJS </Description>
        </Wrapper>
    );
}