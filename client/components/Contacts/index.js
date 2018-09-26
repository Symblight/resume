import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { size } from 'styled-theme'
import { Section, Email } from 'ui'
import GridArticles from '../GridArticles'

import data from '../../data/data.json'


const Wrapper = styled.div`
    max-width: ${size('maxWidth')};
    @media screen and (min-width: 768px) {
      margin: 0 auto;
    }
`

class Contacts extends Component {
    static propTypes = {

    }

    render() {
      return (
        <Wrapper>
          <Section title="Email"><Email data={data.email} /></Section>
          <Section title="Links">
            <GridArticles data={data.links} />
          </Section>
        </Wrapper>
      )
    }
}

export default Contacts
