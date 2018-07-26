import React, { PureComponent } from 'react';

import data from '../data/data.json';

const withSkills = (Component) => {
  class Skills extends PureComponent {

    componentWillMount() {
      this.setState({
        skills: data.skills
      });
    }

    render() {
      const { skills } = this.state;

      if (!skills) return <h3>Loading</h3>;

      return (
        <Component data={skills} {...this.props} />
      );
    }
  }

  return Skills;
};

export default withSkills;