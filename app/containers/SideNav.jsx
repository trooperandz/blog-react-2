import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import CategoryList from './CategoryList';

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { open, handleToggle } = this.props;

    const style = { backgroundColor: '#385972'};

    return (
      <div>
        <Drawer open={open} style={{ opacity: '0.7' }}>
          <AppBar
            style={style}
            title='MH Blog'
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            onTouchTap={handleToggle}
          />
          <CategoryList />
        </Drawer>
      </div>
    );
  }
}