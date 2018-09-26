import React, { PureComponent } from 'react'

import { PageTemplate, Footer } from 'ui'

import Contacts from 'components/Contacts'
import Header from '../../Header'


export default class MainPage extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <PageTemplate
        header={<Header />}
        footer={<Footer />}
      >
        <Contacts />
      </PageTemplate>
    )
  }
}
