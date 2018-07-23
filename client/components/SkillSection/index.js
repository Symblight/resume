import React, { PureComponent } from 'react';

import GridArticles from '../GridArticles';
import data from '../../data/data.json';
import TabContainer from '../TabContainer';

import { Section, TabsNav } from 'ui';

const TEST_TABS = [
    {
        id: 0,
        label: 'technologies'
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

    render() {
        return (
                <Section title='Skills'>
                    technologies
                    <GridArticles data = {data.skills.technologies}/>
                    languages
                    <GridArticles data = {data.skills.languages}/>
                    tools
                    <GridArticles data = {data.skills.tools}/>
                </Section>
        );
    }
}

export default SkillsSection;
