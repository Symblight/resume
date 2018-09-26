import React, { PureComponent } from 'react'
import {
  withRouter,
} from 'react-router-dom'

import { PageTemplate, Footer } from 'ui'
import Header from '../../Header'
import Routers from '../../../routers'


class MainPage extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <PageTemplate
        header={<Header />}
        footer={<Footer />}
      >
        <Routers />
      </PageTemplate>
    )
  }
}

export default withRouter(MainPage)
