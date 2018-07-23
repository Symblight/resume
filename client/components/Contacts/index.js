import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { size, palette } from 'styled-theme';
import { Section } from 'ui';

const Wrapper = styled.div`
    
`;

 class Contacts extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Wrapper>
                    <Section title='Email'>Email</Section>
                    <Section title='Links'>Links</Section>
            </Wrapper>
        )
    }
}

export default Contacts