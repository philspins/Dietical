import alt from '../utils/Dispatcher';
import RecipeActions from '../actions/RecipeActions';

class RecipeStore {
    constructor() {
      this.bindActions(RecipeActions);
    }
}

export default alt.createStore(RecipeStore);
