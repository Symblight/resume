import React, { Component } from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import ProjectsSection from '../ProjectsSection'
import SkillsSection from '../SkillSection'
import EducationSection from '../EducationSection'


const Wrapper = styled.div`
  max-width: ${size('maxWidth')};
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`

class About extends Component {
  render() {
    return (
      <Wrapper>
        <SkillsSection />
        <EducationSection />
      </Wrapper>
    )
  }
}

export default About
