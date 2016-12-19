import alt from '../utils/Dispatcher';
import RecipeListActions from '../actions/RecipeListActions';

class RecipeListStore {
    constructor() {
      this.bindActions(RecipeListActions);
    }
}

export default alt.createStore(RecipeListStore);
