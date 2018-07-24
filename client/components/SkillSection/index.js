import React, { PureComponent } from 'react';

import GridArticles from '../GridArticles';
import data from '../../data/data.json';
import TabContainer from '../TabContainer';

import { Section, TabsNav } from 'ui';

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
        return (
                <Section title='Skills'>
                    <TabsNav data={TEST_TABS} onClick={this.handleOnClick}/>
                    <TabContainer selected={this.state.selected}>
                        <GridArticles data = {data.skills.technologies}/>
                        <GridArticles data = {data.skills.languages}/>
                        <GridArticles data = {data.skills.tools}/>
                    </TabContainer>
                </Section>
        );
    }
}

export default SkillsSection;
