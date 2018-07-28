import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Section, TabsNav } from 'ui';
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

  static propTypes = {
    selected: PropTypes.number,
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
        <TabsNav onClick={this.handleOnClick} selected={selected} data={TEST_TABS} />
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
