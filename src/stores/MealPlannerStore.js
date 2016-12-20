import alt from '../utils/Dispatcher';
import MealPlannerActions from '../actions/MealPlannerActions';

class MealPlannerStore {
    constructor() {
      this.bindActions(MealPlannerActions);
    }
}

export default alt.createStore(MealPlannerStore);
