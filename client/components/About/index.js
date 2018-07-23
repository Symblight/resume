import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { size, palette } from 'styled-theme';

import ProjectsSection from '../ProjectsSection';
import TabContainer from '../TabContainer';
import SkillsSection from '../SkillSection';
import EducationSection from '../EducationSection';

const Wrapper = styled.div`
  
`;

class About extends Component {
  static propTypes = {
  }

  render() {
    return (
      <Wrapper>
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
      </Wrapper>
    )
  }
};

export default About;
