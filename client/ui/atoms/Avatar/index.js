import React from 'react';
import styled from 'styled-components';
import {} from 'styled-theme';

const Wrapper = styled.img`
    border-radius: 5px;
    width: 150px;
    height: 150px;
    padding: 4px;
    background-color: white;
`;

export const Avatar = ({ url }, props) => <Wrapper alt="Avatar" src={url} {...props} />;
