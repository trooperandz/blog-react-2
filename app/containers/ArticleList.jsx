import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { selectArticle } from '../../actions/index';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

class ArticleList extends React.Component {
  renderList() {
    return this.props.articles.map((article) => {
      return (
        <div key={article.id}>
          <List>
            <Subheader style={{fontFamily: 'Roboto, sans-serif'}}>{article.heading}</Subheader>
            <ListItem
              primaryText={article.date}
              secondaryText='Some more info...'
            />
          </List>
          <Divider />
        </div>
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

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectArticle: selectArticle }, dispatch);
// }

export default connect(mapStateToProps/*, mapDispatchToProps*/)(ArticleList)
