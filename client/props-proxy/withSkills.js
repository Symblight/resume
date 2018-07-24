import React, { PureComponent } from 'react';

import data from '../data/data.json';

const withSkills = (Component) => {
    class Skills extends PureComponent {
        render () {
            return (
                <Component data={data.skills} {...this.props} />
            );
        }
    }

    return Skills;
}

export default withSkills;