import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TabContainer from '../TabContainer';
import About from '../About';
import Contacts from '../Contacts';

class InfoContainer extends PureComponent {
  static propTypes = {
    selectedIndex: PropTypes.number
  }

  render() {
    const { selectedIndex } = this.props;

    return (
      <Fragment>
        <TabContainer selected={selectedIndex}>
          <About />
          <Contacts />
        </TabContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedIndex: state.reducerPage.selectedIndex
});

export default connect(mapStateToProps, null)(InfoContainer);