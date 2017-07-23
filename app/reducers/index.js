import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import ActiveCategory from './reducer_active_category';
import ArticlesReducer from './reducer_articles';

// This returns pieces of application state
const rootReducer = combineReducers({
  categories: CategoriesReducer,
  activeCategory: ActiveCategory,
  articles: ArticlesReducer
});

export default rootReducer;