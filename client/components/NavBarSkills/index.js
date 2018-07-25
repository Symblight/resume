import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withSize } from 'react-sizeme';

import { Section, TabsNav, Dropdown } from 'ui';

const withSizeHOC = withSize();

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
      const { size, selected } = this.props;

      if (size.width < 740) {
        return <Dropdown data={TEST_TABS} onClick={this.onClick} selected={selected} />;
      }
      return (
        <TabsNav data={TEST_TABS} onClick={this.onClick} selected={selected} />
      );
    }
}

export default withSizeHOC(NavBar);
