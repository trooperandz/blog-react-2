import React from 'react';
// react-redux is the 'glue' between react and redux
import { connect } from 'react-redux';
import { selectCategory } from '../actions/index';
// This makes sure that the action generated actually flows through all the different reducers
import { bindActionCreators } from 'redux';
import MenuItem from 'material-ui/MenuItem';

class CategoryList extends React.Component {
  renderList() {
    return this.props.categories.map((category) => {
      return (
        <MenuItem
          key={category.id}
          onClick={() => this.props.selectCategory(category)}
        >{category.title}
        </MenuItem>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

// This fn is the 'glue' between react and redux
function mapStateToProps(state) {
  return {
    // Whatever is returned will be props inside of CategoryList
    categories: state.categories
  };
}

// Anything returned from this function will end up as props on the CategoryList container
function mapDispatchToProps(dispatch) {
  // Whenever selectCategory is called, the result should be passed to all reducers
  return bindActionCreators({ selectCategory: selectCategory }, dispatch);
}

// connect fn takes a function and a component and returns a container
// It also needs to know about the dispatch method, selectCategory; make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
