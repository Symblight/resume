import React, { PureComponent } from 'react';

import { PageTemplate, Footer } from 'ui';

import Header from '../../Header';
import InfoContainer from '../../TabsInfoContainer';

export default class MainPage extends PureComponent {
    render() {
        return (
            <PageTemplate
                header={<Header />}
                footer={<Footer />} 
            >
            <InfoContainer/>
            </PageTemplate>
        )
    }
}
