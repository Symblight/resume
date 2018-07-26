import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Section } from 'ui';
import GridArticles from '../GridArticles';
import TabContainer from '../TabContainer';
import withSkills from '../../props-proxy/withSkills';
import NavBarSkill from '../NavBarSkills';

class SkillsSection extends PureComponent {

  static propTypes = {
    selected: PropTypes.string,
    data: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected || 0
    };
  }

  handleOnClick = (index) => {
    this.setState({
      selected: index
    });
  }

  render() {
    const { data } = this.props;
    const { selected } = this.state;

    return (
      <Section title="Skills">
        <NavBarSkill onClick={this.handleOnClick} selected={selected} />
        <TabContainer selected={selected}>
          <GridArticles data={data.technologies} />
          <GridArticles data={data.languages} />
          <GridArticles data={data.tools} />
        </TabContainer>
      </Section>
    );
  }
}

export default withSkills(SkillsSection);
