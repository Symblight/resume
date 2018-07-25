import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Section, ArticleInfo } from 'ui';
import withEducation from '../../props-proxy/withEducation';


class EducationSection extends PureComponent {
    static propTypes = {

    }

    render() {
      const { data } = this.props;

      return (
        <Section title="Education">
          {
            data.map((el, i) => (
              <ArticleInfo
                title={el.title}
                date={el.date}
                summary={el.discription}
                key={i}
              />
            ))
          }
        </Section>
      );
    }
}

export default withEducation(EducationSection);
