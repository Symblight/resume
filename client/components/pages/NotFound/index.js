import React, { Component } from 'react';

import { PageTemplate, Footer } from 'ui';

export default class NotFoundPage extends Component {
  render() {
    return (
      <PageTemplate
        footer={<Footer />}
      >
        NotFound
      </PageTemplate>
    );
  }
}
