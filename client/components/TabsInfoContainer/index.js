import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import TabContainer from '../TabContainer';
import About from '../About';
import Contacts from '../Contacts';

class InfoContainer extends PureComponent {
    render() {
        return (
            <TabContainer selected={this.props.selectedIndex}>
                <About/>
                <Contacts />
            </TabContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedIndex: state.reducerPage.selectedIndex
    }
}

export default connect(mapStateToProps, null)(InfoContainer);