import React, { PureComponent, Fragment } from 'react';
import { SizeMe } from 'react-sizeme';

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

    renderNavBar() {
      const { selected } = this.state;

      return (
        <SizeMe>
          {
            ({ size }) => (
              <Fragment>
                {
                  size.width > 740
                    ? <TabsNav data={TEST_TABS} onClick={this.handleOnClick} selected={selected} />
                    : <Dropdown data={TEST_TABS} onClick={this.handleOnClick} selected={selected} />
                }
              </Fragment>
            )
          }
        </SizeMe>
      );
    }

    render() {
      const { data } = this.props;
      const { selected } = this.state;

      return (
        <Section title="Skills">
          {this.renderNavBar()}
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
