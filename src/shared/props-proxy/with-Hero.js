import React, { PureComponent } from 'react'

import data from '../data/data.json'


const withHero = (Component) => {
  class Hero extends PureComponent {
    render() {
      return (
        <Component data={data.about} {...this.props} />
      )
    }
  }

  return Hero
}

export default withHero
