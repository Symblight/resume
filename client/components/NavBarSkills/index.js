import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';

import { TabsNav, Dropdown } from 'ui';

const TEST_TABS = [
  {
    id: 0,
    label: 'Technologies'
  },
  {
    id: 1,
    label: 'Languages'
  },
  {
    id: 2,
    label: 'Tools'
  }
];

class NavBar extends PureComponent {

  static propTypes = {
    selected: PropTypes.number,
    isMobile: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected || 0
    };
  }

    onClick = (index) => {
      const { onClick } = this.props;

      if (onClick) {
        onClick(index);
      }
    }

    render() {
      const { isMobile, selected } = this.props;

      if (isMobile) {
        return <Dropdown data={TEST_TABS} onClick={this.onClick} selected={selected} />;
      }
      return (
        <TabsNav data={TEST_TABS} onClick={this.onClick} selected={selected} />
      );
    }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 770,
});

export default withSizes(mapSizesToProps)(NavBar);
