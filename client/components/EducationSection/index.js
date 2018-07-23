import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import data from '../../data/data.json';

import { Section, ArticleInfo } from 'ui';

class EducationSection extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <Section title='Education'>
            {
                data.education.map((el, i) => 
                    <ArticleInfo title={el.title} date={el.date} summary={el.discription} key={i}/>
                )
            }
            </Section>
        )
    }
}

export default EducationSection;
