import React, { PureComponent } from 'react';

import { Section, TabsNav, Dropdown } from 'ui';
import GridArticles from '../GridArticles';
import TabContainer from '../TabContainer';
import withSkills from '../../props-proxy/withSkills';

const TEST_TABS = [
  {
    id: 0,
    label: 'Technologies'
  },
  {
    id: 1,
    label: 'Languages'
  },
  {
    id: 2,
    label: 'Tools'
  }
];

class SkillsSection extends PureComponent {

    state = {
      selected: 0
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
          <TabsNav data={TEST_TABS} onClick={this.handleOnClick} />
          <TabContainer selected={selected}>
            <GridArticles data={data.technologies} />
            <GridArticles data={data.languages} />
            <GridArticles data={data.tools} />
          </TabContainer>
          <Dropdown data={TEST_TABS} />
        </Section>
      );
    }
}

export default withSkills(SkillsSection);
