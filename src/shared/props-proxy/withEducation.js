import React, { PureComponent } from 'react'

import data from '../data/data.json'


const withEducation = (Component) => {
  class Education extends PureComponent {
    render() {
      return (
        <Component data={data.education} {...this.props} />
      )
    }
  }

  return Education
}

export default withEducation
